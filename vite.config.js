import path from 'path'

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
    plugins: [],
    proxy: {}
  }
}
