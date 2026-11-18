type NativeRouter = { push: (path: string) => unknown };

export async function navigate(path: string): Promise<boolean> {
    if (
        typeof path !== 'string' ||
        !path.startsWith('/') ||
        path.startsWith('//') ||
        path.length > 4096 ||
        Array.from(path).some(
            (character) => character === '\\' || character.charCodeAt(0) < 32 || character.charCodeAt(0) === 127,
        )
    ) {
        throw new TypeError('An internal application path is required');
    }

    const url = new URL(path, 'https://music.yandex.ru');

    if (url.origin !== 'https://music.yandex.ru') {
        throw new TypeError('An internal application path is required');
    }

    const router = (window as Window & { next?: { router?: NativeRouter } }).next?.router;

    if (typeof router?.push !== 'function') {
        return false;
    }

    return (await router.push(url.pathname + url.search + url.hash)) !== false;
}
