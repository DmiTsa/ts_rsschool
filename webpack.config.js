import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
  path: resolve(__dirname, 'dist'),
  filename: 'bundle.js',
};

// const path = require('path');
//
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
// };
