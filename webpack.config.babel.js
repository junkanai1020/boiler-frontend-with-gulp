import path from 'path'
import webpack from 'webpack'

const SRC_PATH = path.resolve(__dirname, 'src')
const DIST_PATH = path.resolve(__dirname, 'dist')
const JS_PATH = path.resolve(SRC_PATH, 'js')

module.exports = {
  entry: {
    vendor: 'jquery',
    app: `${JS_PATH}/app.js`,
  },
  output: {
    path: `${DIST_PATH}/js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'jquery$': 'jquery/src/jquery.js',
      'headroom': 'headroom.js/dist/headroom.js',
      '@': JS_PATH,
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: 'app',
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
    }),
  ]
}

