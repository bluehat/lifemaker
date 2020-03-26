module.exports = {
  publicPath: "/",
  runtimeCompiler: true,
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "lifemaker | Makers saving lives";
      return args;
    });

    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader")
      .end();
  }
};
