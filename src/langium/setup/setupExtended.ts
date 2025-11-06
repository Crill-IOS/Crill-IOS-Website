import { MonacoEditorLanguageClientWrapper, UserConfig } from 'monaco-editor-wrapper';
import { configureWorker, defineUserServices } from './setupCommon.js';

export const setupConfigExtended = (initialCode?: string): UserConfig => {
    const extensionFilesOrContents = new Map();
    // Use URLs relative to public directory - Vite serves files from public/ at root
    extensionFilesOrContents.set('/language-configuration.json', new URL('/langium/language-configuration.json', window.location.href));
    extensionFilesOrContents.set('/cisco-ios-grammar.json', new URL('/langium/cisco-ios-grammar.json', window.location.href));

    return {
        wrapperConfig: {
            serviceConfig: defineUserServices(),
            editorAppConfig: {
                $type: 'extended',
                languageId: 'cisco-ios',
                code: initialCode || `# Test Grundkonfiguration\n\nconfigure terminal\nno ip domain-lookup\nhostname R1\n\ninterface gigabitethernet 0/0\nno shutdown\nip address 192.168.1.254 255.255.255.0\ndescription To_SW1\nexit\n\n`,
                useDiffEditor: false,
                extensions: [{
                    config: {
                        name: 'cisco-ios-web',
                        publisher: 'generator-langium',
                        version: '1.0.0',
                        engines: {
                            vscode: '*'
                        },
                        contributes: {
                            languages: [{
                                id: 'cisco-ios',
                                extensions: [
                                    '.cisco-ios'
                                ],
                                configuration: './language-configuration.json'
                            }],
                            grammars: [{
                                language: 'cisco-ios',
                                scopeName: 'source.cisco-ios',
                                path: './cisco-ios-grammar.json'
                            }]
                        }
                    },
                    filesOrContents: extensionFilesOrContents,
                }],                
                userConfiguration: {
                    json: JSON.stringify({
                        'workbench.colorTheme': 'Default Dark Modern',
                        'editor.semanticHighlighting.enabled': true
                    })
                }
            }
        },
        languageClientConfig: configureWorker()
    };
};

export const executeExtended = async (htmlElement: HTMLElement, initialCode?: string) => {
    const userConfig = setupConfigExtended(initialCode);
    const wrapper = new MonacoEditorLanguageClientWrapper();
    await wrapper.initAndStart(userConfig, htmlElement);
    return wrapper;
};

