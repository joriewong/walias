import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json'

export default {
  input: './src/main.ts',
  output: [
    {
      file: './bin/main.js',
      format: 'cjs',
      banner: '#!/usr/bin/env node',
    }
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    typescript()
  ]
};