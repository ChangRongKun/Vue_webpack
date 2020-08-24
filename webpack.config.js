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
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins:[htmlPlugin]
}
