const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    mode:'development',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        './index.js'
    ],
    resolve: {
        alias: {
            actions: resolve(__dirname, './src/actions'),
            components: resolve(__dirname, './src/components'),
            reducers: resolve(__dirname, './src/reducers')
        }
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                use: [ 'babel-loader' ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [ 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug' ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};