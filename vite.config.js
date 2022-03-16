import path from 'path'
import legacy from '@vitejs/plugin-legacy'

export default ({ command }) => {
  return {
    server: {
      port: 3000
    },
    preview: {
      port: 8080
    },
    // build: {
    //   target: ''
    // },
    resolve: {
      alias: {
        '/@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 10']
      })
    ],
    proxy: {}
  }
}
