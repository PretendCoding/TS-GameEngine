const path = require('path');

module.exports = { 
    entry: './src/public/js/index.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './public/js/index.js'
    },

    performance: { hints: false },

    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    }
}