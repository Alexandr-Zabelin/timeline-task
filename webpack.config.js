const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(process.cwd(), 'src/components/'),
      '@icons': path.resolve(process.cwd(), 'src/icons/'),
      '@theme': path.resolve(process.cwd(), 'src/theme/'),
      '@hooks': path.resolve(process.cwd(), 'src/hooks/'),
      '@assets': path.resolve(process.cwd(), 'src/assets/'),
      '@utils': path.resolve(process.cwd(), 'src/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
