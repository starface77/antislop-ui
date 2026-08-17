import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [
        react(),
        dts({
          tsconfigPath: './tsconfig.app.json',
          outDir: 'dist',
          entryRoot: 'src/components/pure',
        }),
      ],
      build: {
        outDir: 'dist',
        lib: {
          entry: resolve(import.meta.dirname, 'src/components/pure/index.ts'),
          name: 'AntiSlopUI',
          fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
          formats: ['es', 'cjs'],
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'jsxRuntime',
              'lucide-react': 'LucideReact',
            },
          },
        },
      },
    };
  }

  return {
    plugins: [react()],
  };
});
