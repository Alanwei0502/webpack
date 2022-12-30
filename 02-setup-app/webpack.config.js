const path = require("path");

module.exports = {
	entry: './src/index.js', // 要打包的檔案位置路徑
	output: {
		filename: 'bundle.js', // 打包出去的檔案名稱
		path: path.resolve(__dirname, './dist') // 打包出去的位置路徑 (必須是絕對路徑，所以引進 path 模組)，path.resolve() 接兩個參數，__dirname 代表的是 webpack.config.js 的位置路徑，也就是 02-setup-app/，第二個參數接的是依照 __dirname 再去找到相對的路徑。
	},
  mode: 'none'
}