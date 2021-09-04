# PureLib Development
If you wish to add, remove, or modify PureLib for specific projects you can do so via these steps.

## Install NPM Dependencies
PureLib requires NPM and the following NPM packages. 

### Install NPM Packages
I recommend installing these packages globally and using symbolic links to help reduce project size.

| Install Order | Package               | Command                           |
|:-------------:|-----------------------|-----------------------------------|
| 1             | Babel                 | `npm i -g @babel/core`            |
| 2             | Babel, Command Line   | `npm i -g @babel/cli`             |
| 3             | Babel, Preset Env     | `npm i -g @babel/preset-env`      |
| 4             | Rollup                | `npm i -g rollup`                 |
| 5             | Rollup, Babel         | `npm i -g @rollup/plugin-babel`   |
| 6             | Terser                | `npm i -g terser`                 |
|               | Browserslist          | `npm i -g browserslist`           |

### Create Symbolic Links to Project
When the required NPM packages have been installed, you will need to link them to the project.  If
the NPM packages were installed at the package level, you can skip this step.  Otherwise, run the
following commands to create the link to the global package.

* npm link @rollup/plugin-babel
* npm link @rollup/plugin-node-resolve
* npm link @babel/preset-env

| Needed For        | Command                                | Notes                                            |
|:------------------|:---------------------------------------|:-------------------------------------------------|
| Rollup, Babel     | `npm link @rollup/plugin-babel`        | Allows babel to be imported via .js files        |
| Rollup            | `npm link @babel/preset-env`           | Allows babel to be imported via .js files        |
| Rollup            | `npm link @babel/preset-react`         |                                                  |
| Rollup            | `npm link @rollup/plugin-node-resolve` | Allows node resolve to be imported iva .js files |
| Gulp              | `npm link gulp`                        |                                                  |
| Gulp              | `npm link gulp-concat`                 |                                                  |
| Gulp              | `npm link gulp-clean-css`              |                                                  |
| Gulp              | `npm link gulp-rename`                 |                                                  |
