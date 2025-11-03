import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Für Custom Domain (crillios.com) verwenden wir '/' als base path
  // Für GitHub Pages Subpath: '/Crill-IOS-Website/' (falls keine Custom Domain verwendet wird)
  // Für lokale Entwicklung bleibt es '/'
  base: process.env.USE_CUSTOM_DOMAIN === 'true' ? '/' : (process.env.GITHUB_PAGES === 'true' ? '/Crill-IOS-Website/' : '/'),
  server: {
    host: "localhost",
    port: 8080,
    cors: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    }
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'vscode/external/tslib/tslib.es6.js': 'tslib',
      'vscode/external/tslib/tslib.js': 'tslib',
      'vscode/external/vscode-semver/semver.js': path.resolve(__dirname, './node_modules/@codingame/monaco-vscode-extensions-service-override/external/vscode-semver/semver.js'),
      'langium/lib/languages/generated/ast.js': path.resolve(__dirname, './node_modules/langium/lib/languages/generated/ast.js')
    },
    dedupe: ['vscode', 'tslib']
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        importMetaUrlPlugin as any
      ]
    }
  },
  worker: {
    format: 'es'
  },
  build: {
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
}));
