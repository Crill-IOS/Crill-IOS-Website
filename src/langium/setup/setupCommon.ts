import getEditorServiceOverride from '@codingame/monaco-vscode-editor-service-override';
import getKeybindingsServiceOverride from '@codingame/monaco-vscode-keybindings-service-override';
import { LanguageClientConfig } from 'monaco-editor-wrapper';
import { useOpenEditorStub } from 'monaco-editor-wrapper/vscode/services';
import { useWorkerFactory } from 'monaco-editor-wrapper/workerFactory';

export const defineUserServices = () => {
    return {
        userServices: {
            ...getEditorServiceOverride(useOpenEditorStub as any),
            ...getKeybindingsServiceOverride()
        },
        debugLogging: true
    }
};

export const configureMonacoWorkers = () => {
    // override the worker factory with your own direct definition
    useWorkerFactory({
        ignoreMapping: true,
        workerLoaders: {
            editorWorkerService: () => new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker.js', import.meta.url), { type: 'module' })
        }
    });
};

export const configureWorker = (): LanguageClientConfig => {
    // Use the compiled .js file from the Scripting project's build output
    // Vite automatically detects Worker() constructor with new URL() as a worker entry point
    // Note: Omit .js extension so Vite can properly resolve and bundle the worker
    // Vite will automatically add the .js extension and handle module resolution
    const lsWorker = new Worker(
        new URL('../language/main-browser', import.meta.url),
        { 
            type: 'module',
            name: 'CiscoIos Language Server'
        }
    );

    return {
        options: {
            $type: 'WorkerDirect',
            worker: lsWorker
        }
    }
};

