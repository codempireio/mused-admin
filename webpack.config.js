var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    mode: 'development',
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [
                    path.join(__dirname, 'src/index.css'),
                    path.join(__dirname, 'node_modules/bootstrap/dist/css')
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    query: {
                        import: false,
                        importLoaders: 1,
                        localIdentName: '[folder]_[local]_[hash:base64:5]',
                        modules: true,
                        sourceMap: true
                    }
                }],
                include: [
                    path.join(__dirname, 'src/features'),
                ]
            }
        ]
    }
};
