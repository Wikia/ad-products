/* global module, require */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssExtract = new ExtractTextPlugin('[name]/dist/styles.css');

module.exports = {
	entry: {
		abcd: [
			'./examples/templates/abcd/script.js',
			'./examples/styles.scss'
		],
		'floating-rail': [
			'./examples/templates/floating-rail/script.js',
			'./examples/styles.scss'
		],
		'sticky-bfaa': [
			'./examples/templates/sticky-bfaa/script.js',
			'./examples/styles.scss'
		],
		vuap: [
			'./examples/templates/vuap/script.js',
			'./examples/styles.scss'
		]
	},
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
					path.resolve(__dirname, 'bundles'),
					path.resolve(__dirname, 'components'),
					path.resolve(__dirname, 'node_modules/ad-engine')
				]
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'examples/templates'),
		filename: '[name]/dist/bundle.js'
	},
	plugins: [
		cssExtract
	],
	resolve: {
		alias: {
			'ad-engine': path.join(__dirname, 'node_modules/ad-engine'),
			'ad-products': path.join(__dirname, 'src'),
			node_modules: path.join(__dirname, 'node_modules')
		}
	}
};
