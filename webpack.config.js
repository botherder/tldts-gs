const GasPlugin = require('gas-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'dist/Code.gs'
    },
    plugins: [
        new GasPlugin(),
        new CopyPlugin([{from: 'appsscript.json', to: 'dist/appsscript.json'}])
    ]
}
