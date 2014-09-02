var gulp = require('gulp');
var karma = require('karma').server;

/**
 * Run test once and exit
 */
gulp.task('unit', [], function (done) {
  karma.start({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, done);
});
