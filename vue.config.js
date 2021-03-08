module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '^/': {
                target: 'http://localhost:8080',
                changeOrigin: true
            },
        }
    }
}