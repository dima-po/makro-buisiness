const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlBeautifyPlugin = require('@sumotto/beautify-html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');


// Variables
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets'
}
const PAGES_DIR = `${PATHS.src}/views/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

// Main config
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: PATHS.src,
    output: {
        filename: 'js/bundle.js',
        path: PATHS.dist,
        // publicPath: ''
    },

    devServer: {
        static: {
            directory: PATHS.src,
            watch: true
        },
        port: 4000,
        client: {
            overlay: {
                warnings: false,
                errors: false,
            }
        },
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },

                    'css-loader',

                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    // "postcss-preset-env",
                                    // require('postcss-preset-env'),
                                    // require('css-mqpacker'),
                                    // require('cssnano')({
                                    // preset: [
                                    //     'default', {
                                    //     discardComments: {
                                    //         removeAll: true
                                    //     }
                                    //     }
                                    // ]
                                    // })
                                ],
                            },
                        }
                    },

                    'sass-loader'
                ],
            },

            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    },

    resolve: {
        alias: {
            '~': PATHS.src,
            'Blocks': `${PATHS.src}/views/modules`
        }
    },

    plugins: [
        new CleanWebpackPlugin(),

        new SVGSpritemapPlugin(`${PATHS.src}/images/sprites/*.svg`,
        {
            output: {
            filename: `/images/sprites.svg`,
            svg: {
                sizes: true
            }
            },
            sprite: {
            prefix: false,
            generate: {
                title: false,
                use: true,
                symbol: true,
                // view: '-fragment'
            }
            },
            styles: {
            filename: `${PATHS.src}/styles/base/_sprites.scss`,
            // format: 'fragment',
            variables: {
                sprites: 'sprite',
                sizes: 'size'
            },
            }
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),

        new CopyWebpackPlugin({
            patterns: [
                { from: `${PATHS.src}/static`, to: '' },
            ]
        }),

        // Automatic creation any html pages (Don't forget to RERUN dev server)
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`,
            inject: 'body'
        })),

        new HtmlBeautifyPlugin({
            end_with_newline: true,
            indent_size: 2,
            indent_with_tabs: true,
            indent_inner_html: true,
            preserve_newlines: true,
            unformatted: ['p', 'i', 'b', 'span']
        }),

        new StylelintPlugin()
    ]
};
