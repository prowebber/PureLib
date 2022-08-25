/**
 * Creates a zip file containing the project
 */
const gulp = require('gulp');
const zip = require('gulp-zip');
const projectJson = require('./package.json');					// Import Package.json so variables can be read

let curVersion = projectJson.version;							// Get the current theme version
let zipFileName = curVersion + ".zip";
let zipDestination = 'archive';

/**
 * Generate the zipped files
 */
exports.default = () => (
	gulp.src('dist/**')
		.pipe(zip(zipFileName))
		.pipe(gulp.dest(zipDestination))
)