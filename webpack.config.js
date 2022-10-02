/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
    const { production } = env ? env : { production: false };

    const main = {
        mode: 'production',
        entry: './src/index.tsx',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.svg', '.css', '.ttf'],
            alias: {
                fonts: path.resolve(__dirname, '/')
            }
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader',
                },
                {
                    test: /\.m?\js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                [
                                    '@babel/plugin-proposal-class-properties',
                                    { loose: true },
                                ],
                                '@babel/plugin-transform-runtime',
                            ],
                        },
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.css$/,
                    use: [{loader: 'style-loader',}, {
                            loader: 'css-loader',
                            options: { url: false }
                    }]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader'],
                },
                {
                    test: /\.ttf$/,
                    use: {
                      loader: 'url-loader',
                    },
                  },
                {
                    test: /\.(csv|tsv)$/,
                    use: ['csv-loader'],
                },
                {
                    test: /\.xml$/,
                    use: ['xml-loader'],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'My React Project',
                template: './src/index.html',
            }),
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
    };

    const dev = {
        output: {
            filename: 'dev.js',
            path: path.resolve(__dirname, 'dev'),
        },
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            port: process.env.PORT,
        },
    };

    return production ? main : { ...main, ...dev };
};
