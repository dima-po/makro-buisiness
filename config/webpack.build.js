const path = require('path');


// Main config
module.exports = {
    mode: 'production',
    devtool: false,
    entry: PATHS.src,
    output: {
        filename: 'js/bundle.js',
        path: PATHS.dist,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};