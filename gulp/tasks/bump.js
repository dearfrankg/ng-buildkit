  var
  gulp        = require('gulp'),
  git         = require('gulp-git'),
  bump        = require('gulp-bump'),
  filter      = require('gulp-filter'),
  tag_version = require('gulp-tag-version');

/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */

function inc(importance) {

    /**
     *  BUMP package.json and bower.json
     */

    var isMinorRelease = importance !== 'major';

    // get all the files to bump version in
    return gulp.src(['./package.json', './bower.json'])
      // bump the version number in those files
      .pipe(bump({type: importance}))
      // save it back to filesystem
      .pipe(gulp.dest('./'))
      .pipe(git.commit('bumps package version'))
      .pipe(filter('package.json'))
      .pipe(tag_version());
}

gulp.task('bump-patch', function() { return inc('patch'); });
gulp.task('bump-minor', function() { return inc('minor'); });
gulp.task('bump-major', function() { return inc('major'); });
