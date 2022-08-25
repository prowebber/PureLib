import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

// Get the version of the project
let projectJson = require('./package.json');
let curVersion = projectJson.version;

export default [
    {
        input: 'src/index.js',
        output: {
            banner: '//Version ' + curVersion,
            file: 'dist/purelib.js',
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