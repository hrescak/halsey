const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // need for typescript
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [],
  output: {
    globalObject: "this",
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'halsey', // used for creating a lib
    libraryTarget: 'commonjs2', // used for creating a lib
  },
  externals: {
    // avoid bundling all of React into the same file
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader', // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      },
      //   {
      //     test: /\.(png|svg|jpg|gif)$/,
      //     use: ['file-loader'],
      //   },
      //   {
      //     test: /\.(woff|woff2|eot|)$/,
      //     use: ['file-loader'],
      //   },
      //   {
      //     test: /\.scss$/,
      //     use: ['style-loader', 'css-loader', 'sass-loader'],
      //   },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // }
    ],
  },
};
