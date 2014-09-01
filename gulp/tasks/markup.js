var gulp = require('gulp');

gulp.task('markup', function() {
  return gulp.src('app/htdocs/**')
    .pipe(gulp.dest('build'));
});
