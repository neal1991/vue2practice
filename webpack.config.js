const webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/static/',
		filename: 'build.js'
	}, 
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: {
					loader: "vue-loader",
					options: {
						loaders: {
							css: ExtractTextPlugin.extract({
							    use: ['css-loader', "postcss-loader"]
							}),
							stylus: ExtractTextPlugin.extract({
							    use: ["css-loader", "postcss-loader", "stylus-loader"]
							})
						}
					}
				}
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"]
			},
			{
				test: /\.styl$/,
				use: ["vue-styke-loader", "css-loader", "stylus-loader"]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 10000,
						name: 'img/[name].[hash:7].[ext]'
					}
				}]
			}, 
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 10000,
						name: 'fonts/[name].[hash:7].[ext]'
					}
				}]
			},
			{
				test: /\.js$/,
				use: "babel-loader",
				include: [path.resolve(__dirname, 'src')]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader", "postcss-loader"]
				})
			},
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader", "postcss-loader", "stylus-loader"]
				})
			}]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin({
			filename: "css/style.css"
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.tpl.html'
		})
	]
}