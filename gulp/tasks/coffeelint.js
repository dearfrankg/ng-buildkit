var gulp       = require('gulp');
var coffeelint = require("gulp-coffeelint");

gulp.task('coffeelint', function () {
    gulp.src(['./app/**/*.coffee', '!./app/bower_components/**'])
    .pipe(coffeelint('./.coffeelint.json'))
    .pipe(coffeelint.reporter());
});