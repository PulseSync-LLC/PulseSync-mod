export const VIBE_ANIMATION_VARIANT_KEY = 'modSettings.vibeAnimationEnhancement.animationVariant';
export const VIBE_SHADER_SOURCE_KEY = 'modSettings.vibeAnimationEnhancement.customShaderSource';
export const VIBE_SHADER_MAX_BYTES = 64 * 1024;

type VibeWorkerWindow = Window & {
    getWorker?: (name: 'vibeAnimation') => string;
};

export async function validateVibeShader(source: string) {
    const code = (window as VibeWorkerWindow).getWorker?.('vibeAnimation');

    if (!code || typeof OffscreenCanvas === 'undefined') {
        throw new Error('Проверка шейдеров недоступна в этой версии мода.');
    }

    const url = URL.createObjectURL(new Blob([code], { type: 'application/javascript' }));
    let worker: Worker | undefined;
    let timeout: number | undefined;

    try {
        const validator = new Worker(url);

        worker = validator;
        await new Promise<void>((resolve, reject) => {
            timeout = window.setTimeout(() => reject(new Error('Воркер не ответил на проверку шейдера.')), 10000);

            validator.onmessage = ({ data }) => {
                if (data?.type !== 'vibe-animation-worker-custom-shader-result') {
                    return;
                }

                if (data.error) {
                    reject(new Error(String(data.error)));
                } else {
                    resolve();
                }
            };

            validator.onerror = () => reject(new Error('Не удалось запустить проверку шейдера.'));
            validator.postMessage({ type: 'vibe-animation-worker-validate-custom-shader', payload: source });
        });
    } finally {
        window.clearTimeout(timeout);
        worker?.terminate();
        URL.revokeObjectURL(url);
    }
}
