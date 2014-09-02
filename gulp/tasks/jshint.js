var jshint = require('gulp-jshint');
var gulp   = require('gulp');

gulp.task('jshint', function() {
  return gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
