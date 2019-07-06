const webpack = require('webpack')
const path = require('path')

module.exports = {
   entry: './client/index.jsx',
   output: {
     filename: 'bundle.js',
     path: path.join(__dirname, 'public')
   },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader",
         query: {
          presets: ['@babel/react'],
          plugins: ['@babel/proposal-class-properties']
        }
       }
     }
   ]
}
};