var gulp       = require('gulp');

gulp.task('fonts', function() {
  var dest = './build/fonts';

  return gulp.src('./app/bower_components/bootstrap-sass-official/assets/fonts/**/*')
    .pipe(gulp.dest(dest));
});
