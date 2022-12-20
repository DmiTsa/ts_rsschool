// import { resolve } from 'path';

// export const entry = './src/app.js';
// export const output = {
//   path: resolve(__dirname, 'dist'),
//   filename: 'bundle.js',
// };

const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
