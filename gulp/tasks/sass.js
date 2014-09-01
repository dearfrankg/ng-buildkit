var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', ['images'], function () {
  return gulp.src('app/**/*.{sass, scss}')
    .pipe(sass({
      compass: true,
      bundleExec: true,
      sourcemap: true,
      sourcemapPath: '.'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('build'));
});
