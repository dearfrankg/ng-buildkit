
var gulp         = require('gulp');
var argv         = require('yargs').argv;
var gulpIf       = require('gulp-if');
var streamify    = require('gulp-streamify');
var rev          = require('gulp-rev');

gulp.task('rev', ['browserify', 'sass'], function() {

    var
    isProduction = argv.production,
    base = __dirname.split('/').slice(0,-2).join('/') + '/build';

    return gulp.src(['./build/app.css', './build/app.js'], {base: base})
        .pipe(gulpIf(isProduction, streamify(rev())))
        .pipe(gulp.dest('build'))  // write rev'd  to build dir
        .pipe(rev.manifest())
        .pipe(gulp.dest('build')); // write manifest to build dir

});


