const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: __dirname + "/build",
		filename: "salida.js",
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.s[ac]ss/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html",
		}),
	],
}
