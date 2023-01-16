const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 開頭大寫字母，代表它是一個類，或是構造函數

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		clean: true, // 每一次打包都清除dist，並重新產生內容
	},
  mode: 'none', // 如果是production，HtmlWebpackPlugin的minify預設為true
	plugins:[
		new HtmlWebpackPlugin({
			title: 'My App',
			favicon: './src/assets/favicon/favicon.ico', // 生成favicon的link
			meta:{ // 設置meta標籤，key=name屬性、value=content屬性
				'viewport': 'width=device-width, initial-scale=1',
				'theme-color': '#4285f4',
			},
			base: { // 設置base標籤
				href: "https://robohash.org", 
				target: "_blank"
			},
			filename: 'app.html', // 輸出文檔名
			template: 'src/index.html', // 指定html模板的相對或絕對路徑
			// 使用行內模板取代指定的html模板
			templateContent: ({htmlWebpackPlugin, h1Text}) => `
				<!DOCTYPE html>
				<html lang="en">
					<head>
						<title>${htmlWebpackPlugin.options.title}</title>
					</head>
					<body>
						<h1>${h1Text}</h1>
						<a href="">robohash</a>
						<img src="/set_set2/1?size=100x100" alt="robot" />
					</body>
				</html>
			`,
			templateParameters:{ // templateContent的參數
				h1Text: 'Hello, welcome to the robot world!',
			},
			inject: 'head', // 在html裡面的哪個標籤生成script標籤
			scriptLoading: 'module',
			hash: true
		})
	]
}