const POLICY_MARKER = '__PULSESYNC_ISOLATED_DOM_EXECUTION_POLICY__'
const URL_ATTRIBUTES = new Set(['href', 'src', 'action', 'formaction', 'xlink:href'])

type PolicyEnvironment = typeof globalThis & Record<string, any>

function blocked(reason: string): never {
    throw new Error(`[PulseSync Addons] Blocked isolated capability: ${reason}`)
}

function isExecutableMarkup(value: string): boolean {
    return (
        /<\s*script\b/i.test(value) ||
        /\son[a-z0-9_-]+\s*=/i.test(value) ||
        /\b(?:href|src|action|formaction|xlink:href)\s*=\s*['"]?\s*javascript\s*:/i.test(value) ||
        /<\s*iframe\b[^>]*\bsrcdoc\s*=/i.test(value)
    )
}

function assertSafeAttribute(name: unknown, value: unknown): void {
    const normalizedName = String(name ?? '').toLowerCase()
    const normalizedValue = String(value ?? '')
    if (normalizedName.startsWith('on')) blocked(`executable DOM attribute ${normalizedName} is not allowed`)
    if (normalizedName === 'srcdoc') blocked('iframe srcdoc execution is not allowed')
    if (URL_ATTRIBUTES.has(normalizedName) && /^\s*javascript\s*:/i.test(normalizedValue)) {
        blocked(`javascript URL through ${normalizedName} is not allowed`)
    }
}

function assertSafeMarkup(value: unknown, sink: string): void {
    if (isExecutableMarkup(String(value ?? ''))) blocked(`executable markup through ${sink} is not allowed`)
}

function assertSafeNode(value: unknown): void {
    if (!value || typeof value !== 'object') return
    const node = value as {
        attributes?: Iterable<{ name?: unknown; value?: unknown }>
        localName?: unknown
        nodeName?: unknown
        querySelectorAll?: (selector: string) => Iterable<unknown>
    }
    const tagName = String(node.localName ?? node.nodeName ?? '').toLowerCase()
    if (tagName === 'script') blocked('executable script insertion is not allowed')

    if (node.attributes) {
        for (const attribute of node.attributes) assertSafeAttribute(attribute.name, attribute.value)
    }
    if (typeof node.querySelectorAll === 'function') {
        for (const descendant of node.querySelectorAll('*')) assertSafeNode(descendant)
    }
}

function hardenMethod(
    prototype: Record<string, any> | undefined,
    methodName: string,
    wrap: (original: (...args: any[]) => any) => (...args: any[]) => any,
): void {
    if (!prototype) return
    const descriptor = Object.getOwnPropertyDescriptor(prototype, methodName)
    if (!descriptor || typeof descriptor.value !== 'function') return
    Object.defineProperty(prototype, methodName, {
        ...descriptor,
        configurable: false,
        writable: false,
        value: wrap(descriptor.value),
    })
}

function hardenSetter(prototype: Record<string, any> | undefined, propertyName: string, guard: (value: unknown) => void): void {
    if (!prototype) return
    const descriptor = Object.getOwnPropertyDescriptor(prototype, propertyName)
    if (!descriptor?.set) return
    Object.defineProperty(prototype, propertyName, {
        ...descriptor,
        configurable: false,
        set(value: unknown) {
            guard(value)
            return Reflect.apply(descriptor.set!, this, [value])
        },
    })
}

export function installIsolatedDomExecutionPolicy(environment: PolicyEnvironment = globalThis as PolicyEnvironment): void {
    if (environment[POLICY_MARKER]) return

    const DocumentPrototype = environment.Document?.prototype
    const ElementPrototype = environment.Element?.prototype
    const NodePrototype = environment.Node?.prototype
    const RangePrototype = environment.Range?.prototype

    hardenMethod(
        DocumentPrototype,
        'createElement',
        original =>
            function (this: unknown, tagName: unknown, ...args: unknown[]) {
                if (String(tagName ?? '').toLowerCase() === 'script') blocked('executable script element creation is not allowed')
                return Reflect.apply(original, this, [tagName, ...args])
            },
    )
    hardenMethod(
        DocumentPrototype,
        'createElementNS',
        original =>
            function (this: unknown, namespace: unknown, tagName: unknown, ...args: unknown[]) {
                if (String(tagName ?? '').toLowerCase() === 'script') blocked('executable script element creation is not allowed')
                return Reflect.apply(original, this, [namespace, tagName, ...args])
            },
    )
    for (const methodName of ['write', 'writeln']) {
        hardenMethod(DocumentPrototype, methodName, () => () => blocked(`document.${methodName} is not allowed`))
    }

    hardenMethod(
        ElementPrototype,
        'setAttribute',
        original =>
            function (this: unknown, name: unknown, value: unknown) {
                assertSafeAttribute(name, value)
                return Reflect.apply(original, this, [name, value])
            },
    )
    hardenMethod(
        ElementPrototype,
        'setAttributeNS',
        original =>
            function (this: unknown, namespace: unknown, name: unknown, value: unknown) {
                assertSafeAttribute(name, value)
                return Reflect.apply(original, this, [namespace, name, value])
            },
    )
    hardenMethod(
        ElementPrototype,
        'insertAdjacentHTML',
        original =>
            function (this: unknown, position: unknown, markup: unknown) {
                assertSafeMarkup(markup, 'insertAdjacentHTML')
                return Reflect.apply(original, this, [position, markup])
            },
    )
    hardenMethod(
        ElementPrototype,
        'insertAdjacentElement',
        original =>
            function (this: unknown, position: unknown, element: unknown) {
                assertSafeNode(element)
                return Reflect.apply(original, this, [position, element])
            },
    )

    for (const [prototype, propertyName] of [
        [ElementPrototype, 'innerHTML'],
        [ElementPrototype, 'outerHTML'],
        [environment.ShadowRoot?.prototype, 'innerHTML'],
    ] as const) {
        hardenSetter(prototype, propertyName, value => assertSafeMarkup(value, propertyName))
    }

    for (const methodName of ['appendChild', 'insertBefore', 'replaceChild']) {
        hardenMethod(
            NodePrototype,
            methodName,
            original =>
                function (this: unknown, node: unknown, ...args: unknown[]) {
                    assertSafeNode(node)
                    return Reflect.apply(original, this, [node, ...args])
                },
        )
    }

    const parentNodePrototypes = [ElementPrototype, DocumentPrototype, environment.DocumentFragment?.prototype]
    for (const prototype of parentNodePrototypes) {
        for (const methodName of ['append', 'prepend', 'replaceChildren']) {
            hardenMethod(
                prototype,
                methodName,
                original =>
                    function (this: unknown, ...nodes: unknown[]) {
                        nodes.forEach(assertSafeNode)
                        return Reflect.apply(original, this, nodes)
                    },
            )
        }
    }
    for (const prototype of [ElementPrototype, environment.CharacterData?.prototype, environment.DocumentType?.prototype]) {
        for (const methodName of ['before', 'after', 'replaceWith']) {
            hardenMethod(
                prototype,
                methodName,
                original =>
                    function (this: unknown, ...nodes: unknown[]) {
                        nodes.forEach(assertSafeNode)
                        return Reflect.apply(original, this, nodes)
                    },
            )
        }
    }

    hardenMethod(
        RangePrototype,
        'createContextualFragment',
        original =>
            function (this: unknown, markup: unknown) {
                assertSafeMarkup(markup, 'createContextualFragment')
                const fragment = Reflect.apply(original, this, [markup])
                assertSafeNode(fragment)
                return fragment
            },
    )

    const urlSetters: Array<[Record<string, any> | undefined, string]> = [
        [environment.HTMLAnchorElement?.prototype, 'href'],
        [environment.HTMLAreaElement?.prototype, 'href'],
        [environment.HTMLImageElement?.prototype, 'src'],
        [environment.HTMLIFrameElement?.prototype, 'src'],
        [environment.HTMLFormElement?.prototype, 'action'],
        [environment.HTMLButtonElement?.prototype, 'formAction'],
        [environment.HTMLInputElement?.prototype, 'formAction'],
    ]
    for (const [prototype, propertyName] of urlSetters) hardenSetter(prototype, propertyName, value => assertSafeAttribute(propertyName, value))
    hardenSetter(environment.HTMLIFrameElement?.prototype, 'srcdoc', () => blocked('iframe srcdoc execution is not allowed'))
    hardenSetter(environment.HTMLScriptElement?.prototype, 'src', () => blocked('executable script mutation is not allowed'))
    hardenSetter(environment.HTMLScriptElement?.prototype, 'text', () => blocked('executable script mutation is not allowed'))

    Object.defineProperty(environment, POLICY_MARKER, { value: true, configurable: false, enumerable: false, writable: false })
}
