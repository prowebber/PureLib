// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [
    {
        input: 'src/index.js',
        treeshake: false,
        output: {
            file: 'build/purelib.js',
            footer: "var l = new pureLib();",
            format: 'iife',
            name: 'l',
            sourcemap: false
        },
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            resolve()
        ]
    }
];