// rollup.config.js
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/index-prev.js',
        output: {
            file: 'build/purelib.js',
            footer: "var l = new pureLib();",
            format: 'iife',
            name: 'pureLib',
            sourcemap: false
        },
        plugins: [
            babel({ babelHelpers: 'bundled' }),
            resolve()
        ],
        treeshake: false,
    }
];