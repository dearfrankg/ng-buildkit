var gulp      = require('gulp');
var ngHtml2Js = require("gulp-ng-html2js");
var concat    = require("gulp-concat");


gulp.task('templates', function() {
	gulp.src("app/**/*.tpl.html")
    .pipe(ngHtml2Js({
      moduleName: "MyPartials",
      prefix: "/partials/"
    }))
    .pipe(concat("templates.js"))
    .pipe(gulp.dest("./app"));
});

