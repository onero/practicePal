var wiredep = require('wiredep').stream;

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({ src: 'index.html' }))
    .pipe(gulp.dest('./dest'));
});
