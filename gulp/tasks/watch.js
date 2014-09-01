/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('app/**/*.{sass,scss}', ['sass']);
  gulp.watch('app/assets/images/**', ['images']);
  gulp.watch('app/app.hbs', ['markup']);
});
