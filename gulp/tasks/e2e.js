var gulp       = require('gulp');
var protractor = require("gulp-protractor").protractor;

gulp.task('e2e', function() {

  gulp.src(["./test/e2e/**/*spec.{js,coffee}"])
      .pipe(protractor({
          configFile: "test/protractor.conf.js",
          args: ['--baseUrl', 'http://127.0.0.1:8000']
      }))
      .on('error', function(e) { throw e; });

});