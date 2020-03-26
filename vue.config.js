module.exports = {
    publicPath: '/lifemaker/',
    runtimeCompiler: true,
    chainWebpack: config => {
        config.module.rule('markdown')
            .test(/\.md$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
            .use('markdown-loader')
            .loader('markdown-loader')
            .end();
    }
}