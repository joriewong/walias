import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'bin/bundle.js',
      format: 'es'
    },
    {
      file: 'bin/bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  plugins: [json()]
};