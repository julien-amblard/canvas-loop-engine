var path = require('path')
var webpack = require('webpack')
const config = {
	entry : './src/engine.js',
	output : {
		path: path.resolve(__dirname,'lib'),
		filename: 'canvasEngine.class.min.js',
		libraryTarget: 'umd'
	},
	mode: 'production',
	target: 'web',
	plugins: [],
	resolve: {
		extensions: ['.js']
	},
	externals: {
		"clone-deep": "clone-deep"
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
			test: /\.(js)$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/plugin-proposal-class-properties"]
					}
				}
			}
		]
	}
}
module.exports = config