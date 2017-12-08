const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssExtract = new ExtractTextPlugin('styles.css');

module.exports = [{
	entry: [
		path.resolve(__dirname, 'src', 'styles/styles.scss')
	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				loader: cssExtract.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'sass-loader'
					]
				})
			},
			{
				test: /.js$/,
				use: 'babel-loader',
				include: [
					path.resolve(__dirname, 'node_modules/ad-engine')
				]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		// TODO: remove me I'm hack for webpack scss build
		// Together with .js it breaks js modules, for this setup it needs to generate some file
		filename: 'ignore_me.js'
	},
	plugins: [
		cssExtract
	]
}];
