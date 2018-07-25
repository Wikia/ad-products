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
			'bidders/a9': './examples/bidders/a9/script.js',
			'bidders/prebid': './examples/bidders/prebid/script.js',
			'bidders/reusable-prebid': './examples/bidders/reusable-prebid/script.js',
			'services/bill-the-lizard': './examples/services/bill-the-lizard/script.js',
			'templates/abcd': './examples/templates/abcd/script.js',
			'templates/floating-rail': './examples/templates/floating-rail/script.js',
			'templates/hivi-uap': './examples/templates/hivi-uap/script.js',
			'templates/hivi-uap-ctp': './examples/templates/hivi-uap-ctp/script.js',
			'templates/hivi-uap-stickiness-not-allowed': './examples/templates/hivi-uap-stickiness-not-allowed/script.js',
			'templates/hivi-uap-static': './examples/templates/hivi-uap-static/script.js',
			'templates/hivi-uap-jwp': './examples/templates/hivi-uap-jwp/script.js',
			'templates/sticky-bfaa': './examples/templates/sticky-bfaa/script.js',
			'templates/vuap': './examples/templates/vuap/script.js'
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
			filename: '[name]/dist/bundle.js'
		},
		plugins: [
			new MiniCssExtractPlugin({ filename: '[name]/dist/styles.css' }),
			new StringReplacePlugin()
		],
		resolve: {
			alias: {
				[pkg.name]: path.join(__dirname, 'src'),
				'@wikia/bidders': path.join(__dirname, 'src/bidders')
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
	window: {
		externals: {
			'@wikia/ad-engine': {
				window: ['Wikia', 'adEngine']
			}
		},
		output: {
			filename: '[name].global.js',
			library: ['Wikia', 'adProducts'],
			libraryTarget: 'window'
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
	window: {
		output: {
			filename: '[name].global.js',
			library: ['Wikia', 'adProductsGeo'],
			libraryTarget: 'window'
		}
	},
};

const bidderEnvironments = {
	production: {
		mode: 'production',
		entry: {
			'bidders': './src/bidders/index.js'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
		}
	}
};

const bidderTargets = {
	amd: {
		externals: {
			'@wikia/ad-engine': {
				amd: 'ext.wikia.adEngine3'
			}
		},
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
			library: 'bidders',
			libraryTarget: 'commonjs2'
		},
		optimization: {
			minimize: false
		}
	},
	window: {
		externals: {
			'@wikia/ad-engine': {
				window: ['Wikia', 'adEngine']
			}
		},
		output: {
			filename: '[name].global.js',
			library: ['Wikia', 'adProductsBidders'],
			libraryTarget: 'window'
		}
	},
};

module.exports = function (env) {
	const isProduction = (process.env.NODE_ENV === 'production') || (env && env.production);
	const isTest = (env && env.test);

	if (isProduction) {
		return [
			merge(common, environments.production, targets.amd),
			merge(common, environments.production, targets.window),
			merge(common, environments.production, targets.commonjs),
			merge(common, geoEnvironments.production, geoTargets.amd),
			merge(common, geoEnvironments.production, geoTargets.window),
			merge(common, geoEnvironments.production, geoTargets.commonjs),
			merge(common, bidderEnvironments.production, bidderTargets.amd),
			merge(common, bidderEnvironments.production, bidderTargets.window),
			merge(common, bidderEnvironments.production, bidderTargets.commonjs)
		];
	} else if (isTest) {
		return merge(common, environments.test);
	}

	return merge(common, environments.development);
};
