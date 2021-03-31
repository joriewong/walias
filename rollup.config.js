import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/main.ts',
  output: [
    {
      file: './bin/main.js',
      format: 'umd',
      banner: '#!/usr/bin/env node',
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript()
  ]
};