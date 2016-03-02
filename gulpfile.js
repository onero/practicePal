'use strict'

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  maps = require('gulp-sourcemaps'),
  del = require('del')

  gulp.task('concatScripts', function () {
  return gulp.src([
  'src/js/app.js',
  'src/js/**/*.js'
  ])
    .pipe(concat('app.concat.js'))
    .pipe(maps.write('/'))
    .pipe(gulp.dest('src/js'))
});

gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src("src/js/app.concat.js")
		.pipe(uglify({mangle: false}))
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('src/js'));
});


gulp.task('watch', function() {
  gulp.watch([
    'src/js/controllers/*.js',
    'src/js/directives/*.js',
    'src/js/routes/*.js',
    'src/js/services/*.js'], ['default']);
});

gulp.task('clean', function() {
  return del([
    'src/js/app.min.js',
    'src/js/app.concat.js']);
});

gulp.task("build", ["minifyScripts"], function()
{
  // return gulp.src([
  //   'src/styles/normalize.css',
  //   'src/styles/main.css'], {base: './'})
  // .pipe(gulp.dest('dist'));
});

//TODO look at deletion problem
gulp.task("default", ['clean'], function() {
    gulp.start('build');
});
