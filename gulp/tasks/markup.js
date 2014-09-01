var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var pkg = require('../../package.json');

gulp.task('markup', ['fonts'], function() {
  var templateData = {
       title: pkg.name
  },
  options = {
      ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
      // partials : {
      //     footer : '<footer>the end</footer>'
      // },
      // batch : ['./src/partials'],
      helpers : {
          capitals : function(str){
            return str.toUpperCase();
          },
          camelCase : function (str) {
            var words = str.split('-');
            words.forEach(function (word, index, array) {
              var newWord = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
              array[index] = newWord;
            });
            var result = words.join('');
            return result;
          }

      }
  };

  return gulp.src('app/app.hbs')
      .pipe(handlebars(templateData, options))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./build/'));

});