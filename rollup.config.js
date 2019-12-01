// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [
    {
        input: 'master/index.js',
        treeshake: false,
        output: {
            file: 'build/purelib.js',
            format: 'iife',
            name: 'steven',
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