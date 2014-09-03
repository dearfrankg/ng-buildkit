var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {
  var dest = './build/assets/images';

  return gulp.src('./app/assets/images/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(imagemin({
      optimizationLevel: 3,     // png
      progressive: true,        // jpg
      interlaced: true          // gif
    })) // Optimize -- see options here: http://goo.gl/YTiUTb
    .pipe(gulp.dest(dest));
});
