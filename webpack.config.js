const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
      main: path.resolve(__dirname, 'src', 'scripts', 'index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].gs'
    },
    plugins: [
      new GasPlugin(),
      new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'src', 'assets'),
                to: path.resolve(__dirname, 'dist'),
            }
        ]
      })
    ]
};
