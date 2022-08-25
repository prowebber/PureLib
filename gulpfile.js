const {dest, parallel, series, src} = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const header = require('gulp-header');                          // Include the header module
const projectJson = require('./package.json');					// Import Package.json so variables can be read

const inputCss = 'src/css';									// Path to raw CSS files
const outputCss = 'dist';									// Where CSS files are saved
const outputFileName = 'purelib.css';						// The name of the final generated file

// Append the version to the top of each file
let curVersion = projectJson.version;						// Get the current theme version
let headComment = "/* Version: " + curVersion + " */\n";	// Create the header text to prepend to all files (excluding .min.css)

/*
 * Text Editor
 */
function textEditor() {
	return src([
		inputCss + '/_root.css',
	])
		.pipe(concat(outputFileName))              		// Merge all the files into 1
		.pipe(header(headComment))						// Add header comment
		.pipe(dest(outputCss));							// Save the merged files
}
function minifyTextEditor() {
	return src([outputCss + '/' + outputFileName])
		.pipe(cleanCSS({compatibility: '*'}))         	// Minify the CSS
		.pipe(rename({suffix: '.min'}))                	// Add '.min' to filename
		.pipe(dest(outputCss));							// Specify where to save the file
}
function copyToDev(){
	return src([outputCss + '/' + outputFileName])
		.pipe(cleanCSS({compatibility: '*'}))         	// Minify the CSS
		.pipe(rename({suffix: '.min'}))                	// Add '.min' to filename
		.pipe(dest("dev/css"));							// Specify where to save the file
}


/**
 * Build the CSS
 * - parallel (run in any order)
 * - series (run in the specified order)
 */
exports.default = series(
	series(series(textEditor, minifyTextEditor, copyToDev)),
);
