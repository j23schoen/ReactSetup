var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: {
        firstJS: APP_DIR + "/index.jsx",
        secondJS: APP_DIR + "/suhdude.jsx"
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = config;
