import { nodeResolve } from '@rollup/plugin-node-resolve'

export default [
  {
    input: 'index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'esm'
    },
    external: [],
    plugins: [nodeResolve({ preferBuiltins: true })]
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto'
    },
    external: [],
    plugins: [nodeResolve({ preferBuiltins: true })]
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'findReplace'
    },
    external: [],
    plugins: [nodeResolve({ preferBuiltins: true })]
  }
]
