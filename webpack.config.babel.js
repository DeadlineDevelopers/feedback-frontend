import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const JS_JSX_PATTERN = /\.jsx?$/;
const SCSS_PATTERN = /\.scss$/;
const ASSET_PATTERN = /\.(jpe?g|png|gif|svg|mp4|ttf|otf|eot|woff(2)?)$/;

const projectName = process.env.npm_package_name;

export default (env) => {
  const isDevelopment = env.development;

  return {
    entry: [
      'babel-polyfill',
      'App.jsx',
      'App.scss'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `${projectName}.js`
    },
    module: {
      rules: [
        {
          test: JS_JSX_PATTERN,
          exclude: /node_modules/,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: {
            emitWarning: isDevelopment,
            failOnError: !isDevelopment
          }
        },
        {
          test: JS_JSX_PATTERN,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: SCSS_PATTERN,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => ([autoprefixer])
                }
              },
              'sass-loader'
            ]
          })
        },
        {
          test: ASSET_PATTERN,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            context: 'assets'
          }
        }
      ]
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'assets')
      ],
      extensions: [
        '.js',
        '.jsx'
      ]
    },
    devServer: {
      port: 3000,
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        inject: 'body',
        hash: true
      }),
      new StyleLintPlugin({
        configFile: path.resolve(__dirname, '.stylelintrc.json'),
        files: 'src/**/*.scss',
        syntax: 'scss',
        emitErrors: !isDevelopment,
        failOnError: !isDevelopment
      }),
      new ExtractTextPlugin({
        filename: `${projectName}.css`,
        disable: isDevelopment,
        allChunks: true
      })
    ],
    bail: !isDevelopment
  }
};
