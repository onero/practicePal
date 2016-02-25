var wiredep = require('wiredep').stream;

//Automatic insert dependencies into index.html

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({ src: 'index.html' }))
    .pipe(gulp.dest('./dest'));
});
