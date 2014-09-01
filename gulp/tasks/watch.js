/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('app/sass/**', ['sass']);
  gulp.watch('app/images/**', ['images']);
  gulp.watch('app/htdocs/**', ['markup']);
});
