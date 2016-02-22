'use strict'

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  maps = require('gulp-sourcemaps'),
  del = require('del'),
  wiredep = require('wiredep').stream;

  gulp.task('concatScripts', function () {
  return gulp.src([
  'src/js/app.js',
  'src/js/**/*.js'
  ])
    .pipe(concat('app.concat.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('dist'))
});

gulp.task("minifyScripts", ["concatScripts"], function() {
	return gulp.src("dist/app.concat.js")
		.pipe(uglify({mangle: false}))
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({ src: 'index.html' }))
    .pipe(gulp.dest('./'));
});


gulp.task('watch', function() {
  gulp.watch('src/js/controllers/main.js', ['concatScripts']);
});

gulp.task('clean', function() {
  del([
    'dist']);
});

gulp.task("build", ["minifyScripts"], function()
{
  // return gulp.src([
  //   'src/styles/normalize.css',
  //   'src/styles/main.css'], {base: './'})
  // .pipe(gulp.dest('dist'));
});

//TODO look at deletion problem
gulp.task("default", ["bower"], function() {
    gulp.start('build');
});
