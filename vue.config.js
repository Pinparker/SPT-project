/* const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
}); */
module.exports = {
  pluginOptions: {
    electronBuilder: {
      customFileProtocol: "/", //解决element图标问题

      builderOptions: {
        appId: "com.TomatoLRX.app",
        productName: "SPTSystem", //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: "Copyright © 2023", //版权信息
        directories: {
          output: "./dist_electron", //输出文件路径（dist），之前编译的默认是dist_electron
        },
        win: {
          icon: "vueApp.ico", //这里注意配好图标路径
          target: [
            {
              target: "nsis", //利用nsis制作安装程序,打包文件的后缀为exe
              arch: [
                "x64", //64位
                "ia32", //32位
              ],
            },
          ], //添加自定义安装向导
        },
        nsis: {
          oneClick: false, //创建一键式安装程序还是辅助安装程序
          language: "2052", //安装语言
          perMachine: true, //应用所有用户
          allowToChangeInstallationDirectory: true, //用户可以选择路径
        },
        // options placed here will be merged with default configuration and passed to electron-builder
      },
    },
  },
};
