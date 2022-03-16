import path from 'path'
import legacy from '@vitejs/plugin-legacy'
import pkg from './package.json'

export default ({ command }) => {
  return {
    server: { port: 3000 },
    preview: { port: 8080 },
    resolve: {
      alias: {
        '/@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 10'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      })
    ],
    proxy: {},
    define: {
      __APP_VERSION__: JSON.stringify(`v${pkg.version}`)
    }
  }
}
