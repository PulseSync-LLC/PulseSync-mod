import { useRef, useState } from 'react';
import { SettingAction } from '../../components/controls/SettingAction';
import { SettingsItem } from '../../components/settings/SettingsItem';
import type { SettingsSchemaContext } from '../../schema/types';
import {
    validateVibeShader,
    VIBE_ANIMATION_VARIANT_KEY,
    VIBE_SHADER_MAX_BYTES,
    VIBE_SHADER_SOURCE_KEY,
} from './customShader';
import styles from './CustomShaderSetting.module.scss';

export function CustomShaderSetting({ context }: { context: SettingsSchemaContext }) {
    const { api } = context;
    const fileInput = useRef<HTMLInputElement>(null);
    const [pending, setPending] = useState<'import' | 'remove'>();
    const [error, setError] = useState<string>();
    const hasShader = Boolean(context.getString(VIBE_SHADER_SOURCE_KEY));
    const title = 'Пользовательский шейдер';
    const description = hasShader ? 'Шейдер загружен.' : 'Фрагментный шейдер GLSL ES 1.00 (.frag или .glsl).';

    async function importShader(file: File) {
        if (!api || pending) {
            return;
        }

        setError(undefined);
        setPending('import');

        try {
            if (!/\.(frag|glsl)$/i.test(file.name) || file.size > VIBE_SHADER_MAX_BYTES) {
                throw new Error('Выберите файл .frag или .glsl размером до 64 КБ.');
            }

            const source = await file.text();

            await validateVibeShader(source);
            await api.setModSetting(VIBE_SHADER_SOURCE_KEY, source);

            if (api.getModSettingSnapshot(VIBE_ANIMATION_VARIANT_KEY) !== 'custom') {
                await api.setModSetting(VIBE_ANIMATION_VARIANT_KEY, 'custom');
            }
        } catch (reason) {
            setError(reason instanceof Error ? reason.message : 'Не удалось импортировать шейдер.');
        } finally {
            setPending(undefined);
        }
    }

    async function removeShader() {
        if (!api || pending) {
            return;
        }

        setError(undefined);
        setPending('remove');

        try {
            await api.setModSetting(VIBE_SHADER_SOURCE_KEY, '');
        } catch (reason) {
            setError(reason instanceof Error ? reason.message : 'Не удалось удалить шейдер.');
        } finally {
            setPending(undefined);
        }
    }

    return (
        <>
            <input
                ref={fileInput}
                hidden
                type="file"
                accept=".frag,.glsl"
                onChange={(event) => {
                    const file = event.currentTarget.files?.[0];

                    event.currentTarget.value = '';

                    if (file) {
                        void importShader(file);
                    }
                }}
            />
            <SettingsItem
                id={VIBE_SHADER_SOURCE_KEY}
                searchText={[title, description, hasShader ? 'Обновить или удалить шейдер' : 'Импортировать шейдер']}
            >
                <SettingAction
                    title={title}
                    description={
                        hasShader ? (
                            <>
                                {description}{' '}
                                <button
                                    className={styles.remove}
                                    type="button"
                                    disabled={!api || Boolean(pending)}
                                    onClick={() => void removeShader()}
                                >
                                    {pending === 'remove' ? 'Удаление…' : 'Удалить'}
                                </button>
                            </>
                        ) : (
                            description
                        )
                    }
                    actionLabel={pending === 'import' ? 'Проверка…' : hasShader ? 'Обновить' : 'Импортировать'}
                    disabled={!api || Boolean(pending)}
                    onClick={() => fileInput.current?.click()}
                />
            </SettingsItem>
            {error ? (
                <div className={styles.error} role="status">
                    {error}
                </div>
            ) : null}
        </>
    );
}
