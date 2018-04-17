/* global module, require */
/* eslint-disable no-console, import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const get = require('lodash/get');
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
				include: [
					path.join(__dirname, 'src'),
					path.join(__dirname, 'examples')
				]
			},
			{
				test: path.resolve(__dirname, 'src/index.js'),
				loader: StringReplacePlugin.replace({
					replacements: [{
						pattern: /<\?=[ \t]*PACKAGE\(([\w\-_.]*?)\)[ \t]*\?>/ig,
						replacement: (match, p1) => get(pkg, p1)
					}]
				})
			}
		]
	}
};

const environments = {
	production: {
		entry: {
			'ad-products': './src/index.js',
		},
		devtool: 'source-map',
		output: {
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			new ExtractTextPlugin({ filename: '[name].css' }),
			new StringReplacePlugin(),
			new webpack.optimize.ModuleConcatenationPlugin()
		]
	},
	development: {
		entry: {
			'abcd': './examples/templates/abcd/script.js',
			'floating-rail': './examples/templates/floating-rail/script.js',
			'hivi-uap': './examples/templates/hivi-uap/script.js',
			'hivi-uap-ctp': './examples/templates/hivi-uap-ctp/script.js',
			'hivi-uap-stickiness-not-allowed': './examples/templates/hivi-uap-stickiness-not-allowed/script.js',
			'hivi-uap-static': './examples/templates/hivi-uap-static/script.js',
			'hivi-uap-jwp': './examples/templates/hivi-uap-jwp/script.js',
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
			new StringReplacePlugin(),
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
		externals: Object.keys(pkg.dependencies).map(key => new RegExp(`^${key}`)),
		output: {
			filename: '[name].js',
			library: 'adEngine',
			libraryTarget: 'commonjs2'
		}
	},
	assign: {
		externals: {
			'@wikia/ad-engine': {
				root: ['Wikia', 'adEngine']
			}
		},
		output: {
			filename: '[name].global.js',
			library: 'Wikia.adProducts',
			libraryTarget: 'assign'
		}
	},
};

const geo = {
	production: {
		entry: {
			'geo': './src/utils/geo.js'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
		},
	},
	amd: {
		output: {
			filename: '[name].amd.js',
			library: 'ext.wikia.[name]',
			libraryTarget: 'amd'
		}
	},
	commonjs: {
		externals: Object.keys(pkg.dependencies).map(key => new RegExp(`^${key}`)),
		output: {
			filename: '[name].js',
			library: 'geo',
			libraryTarget: 'commonjs2'
		}
	},
	assign: {
		output: {
			filename: '[name].global.js',
			library: 'Wikia.adProductsGeo',
			libraryTarget: 'assign'
		}
	},
};

module.exports = function (env) {
	const isProduction = (process.env.NODE_ENV === 'production') || (env && env.production);
	const isTest = (env && env.test);

	if (isProduction) {
		return [
			merge(common, environments.production, targets.commonjs),
			merge(common, environments.production, targets.amd),
			merge(common, environments.production, targets.assign),
			merge(common, geo.production, geo.amd),
			merge(common, geo.production, geo.commonjs),
			merge(common, geo.production, geo.assign)
		];
	} else if (isTest) {
		return merge(common, environments.test);
	}

	return merge(common, environments.development);
};
