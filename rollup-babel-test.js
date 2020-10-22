// rollup.config.js
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'test/babel/index.js',
        output: {
            file: 'build/babel-test.js',
            format: 'iife',
            name: 'test',
        },
        plugins: [
            babel({ babelHelpers: 'bundled' }),
            resolve()
        ],
    }
];