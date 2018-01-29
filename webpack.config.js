/* global module, require */
/* eslint-disable no-console, import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

const common = {
	context: __dirname,
	module: {
		rules: [
			{
				test: /\.s?css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'sass-loader'
					]
				}),
				exclude: /node_modules/
			},
			{
				test: /.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};

const environments = {
	production: {
		entry: {
			'ad-products': './src/index.js'
		},
		devtool: 'source-map',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			library: 'adProducts',
			libraryTarget: 'commonjs2'
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new ExtractTextPlugin({ filename: '[name].css' })
		]
	},
	development: {
		entry: {
			'abcd': './examples/templates/abcd/script.js',
			'floating-rail': './examples/templates/floating-rail/script.js',
			'hivi-uap': './examples/templates/hivi-uap/script.js',
			'hivi-uap-ctp': './examples/templates/hivi-uap-ctp/script.js',
			'hivi-uap-static': './examples/templates/hivi-uap-static/script.js',
			'sticky-bfaa': './examples/templates/sticky-bfaa/script.js',
			'vuap': './examples/templates/vuap/script.js'
		},
		devtool: 'cheap-module-eval-source-map',
		output: {
			path: path.resolve(__dirname, 'examples'),
			filename: 'templates/[name]/dist/bundle.js'
		},
		plugins: [
			new ExtractTextPlugin({ filename: '[name]/dist/styles.css' }),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor',
				filename: '[name]/dist/vendor.js'
			})
		],
		resolve: {
			alias: {
				[pkg.name]: path.join(__dirname, 'src')
			}
		}
	},
	test: {}
};

const targets = {
	amd: {
		externals: {
			'@wikia/ad-engine': {
				amd: 'ext.wikia.adEngine3'
			}
		},
		output: {
			filename: '[name].amd.js',
			library: 'ext.wikia.adProducts',
			libraryTarget: 'amd'
		}
	},
	commonjs: {
		externals: Object.keys(pkg.dependencies),
		output: {
			filename: '[name].js',
			library: 'adEngine',
			libraryTarget: 'commonjs2'
		}
	}
};

module.exports = function (env) {
	const isProduction = (process.env.NODE_ENV === 'production') || (env && env.production);
	const isTest = (env && env.test);

	if (isProduction) {
		return [
			merge(common, environments.production, targets.commonjs),
			merge(common, environments.production, targets.amd)
		];
	} else if (isTest) {
		return merge(common, environments.test);
	}

	return merge(common, environments.development);
};
