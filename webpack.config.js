'use strict'

module.exports = {
    entry: './main.js',
    output: {
        filename: './build.js',
        // globalObject: "this",
        // library: ['nn', 'imgUtil', 'startWarp']
    },
    optimization: {
        minimize: false
    },
    
};