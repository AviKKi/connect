'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');
var checkFileSize = require('gulp-check-filesize');
// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('./src/*.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./build'))
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'scripts',
    'pages',
    'zipBuild'
    
  );
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['./src/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./build'));
});
// Zip the file
gulp.task('zipBuild', function () {
    return gulp.src('./build/*')
        .pipe(zip('game.zip'))
        .pipe(gulp.dest('./dist'))
        .pipe(checkFileSize({
            fileSizeLimit: 16384 
        }));
});
