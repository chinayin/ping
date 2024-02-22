import path from 'path'
import pkg from './package.json'
import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin } from 'vite-plugin-html'

const r = p => path.resolve(__dirname, './src', p)

// eslint-disable-next-line no-unused-vars
export default ({ command }) => {
  return {
    server: { port: 3000 },
    preview: { port: 8080 },
    resolve: {
      alias: {
        '@': r('.')
      }
    },
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 10'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.js',
        template: 'index.html',
        inject: {
          data: {
            appVersion: `v${pkg.version}`
          }
        }
      })
    ],
    proxy: {},
    define: {
      __APP_VERSION__: JSON.stringify(`v${pkg.version}`)
    }
  }
}
