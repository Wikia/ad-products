/* global module, require */
/* eslint-disable no-console, import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');
const get = require('lodash/get');
const pkg = require('./package.json');

const common = {
	mode: 'development',
	context: __dirname,
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				],
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
				test: /\.json$/,
				loader: 'json-loader',
				type: 'javascript/auto',
				exclude: /node_modules/
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
		mode: 'production',
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
			new MiniCssExtractPlugin({ filename: '[name].css' }),
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
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						name: 'vendor',
						filename: '[name]/dist/vendor.js',
						chunks: 'all'
					}
				}
			}
		},
		output: {
			path: path.resolve(__dirname, 'examples'),
			filename: 'templates/[name]/dist/bundle.js'
		},
		plugins: [
			new MiniCssExtractPlugin({ filename: '[name]/dist/styles.css' }),
			new StringReplacePlugin()
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
		},
		optimization: {
			minimize: false
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

const geoEnvironments = {
	production: {
		mode: 'production',
		entry: {
			'geo': './src/utils/geo.js'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
		}
	}
};

const geoTargets = {
	amd: {
		output: {
			filename: '[name].amd.js',
			library: 'ext.wikia.adEngine.[name]',
			libraryTarget: 'amd'
		}
	},
	commonjs: {
		externals: Object.keys(pkg.dependencies).map(key => new RegExp(`^${key}`)),
		output: {
			filename: '[name].js',
			library: 'geo',
			libraryTarget: 'commonjs2'
		},
		optimization: {
			minimize: false
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
			merge(common, environments.production, targets.amd),
			merge(common, environments.production, targets.assign),
			merge(common, environments.production, targets.commonjs),
			merge(common, geoEnvironments.production, geoTargets.amd),
			merge(common, geoEnvironments.production, geoTargets.assign),
			merge(common, geoEnvironments.production, geoTargets.commonjs)
		];
	} else if (isTest) {
		return merge(common, environments.test);
	}

	return merge(common, environments.development);
};
