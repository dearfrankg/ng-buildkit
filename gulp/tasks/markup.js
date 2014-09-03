var gulp       = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var fs         = require('fs');
var rename     = require('gulp-rename');
var pkg        = require('../../package.json');
var argv       = require('yargs').argv;

gulp.task('markup', ['fonts', 'rev'], function() {

  var
  isProduction = argv.production,
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
          },
          assetPath: function (path, context) {
              return ['', context.data.root[path]].join('/');
          }
      }
  },
  templateData;

  if (isProduction) {
    templateData = JSON.parse(fs.readFileSync('build/rev-manifest.json', 'utf8'));
  }
  else {
    templateData = {
      "app.css": "app.css",
      "app.js": "app.js"
    };
  }
  templateData.title = pkg.name;

  return gulp.src('app/app.hbs')
      .pipe(handlebars(templateData, options))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./build/'));

});