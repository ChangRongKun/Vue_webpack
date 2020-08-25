const path = require('path');
// 导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({ // 创建插件实例对象
  template: './src/index.html', // 指定要用到的模板文件
  filename: 'index.html' // 指定生成文件名字，该文件不可见
})

module.exports = {
  mode: 'development', // mode 用来指定构建模式
  entry: path.join(__dirname, './src/index.js'),
  output: { // 输出文件存放路径
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map', // 加上对应的配置
  plugins: [htmlPlugin],
  // 所有第三方文件模块的匹配规则
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use: 'url-loader?limit=16940'
      },
      // exclude 为排除项，表示 babel-loader 不需要处理 node_modules 中的 js 文件
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}