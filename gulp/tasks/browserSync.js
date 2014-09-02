var
  gulp        = require('gulp'),
  browserSync = require('browser-sync'),
  path        = require("path"),
  url         = require("url"),
  fs          = require("fs"),
  defaultFile = "index.html",
  folder      = path.resolve(__dirname, "../../build");


gulp.task('browserSync', ['build'], function() {
  browserSync({
    files: [
      // Watch everything in build
      "build/**",
      // Exclude sourcemap files
      "!build/**.map"
    ],
    server: {
      // src is included for use with sass source maps
      baseDir: ['build', 'app'],
      middleware: function(req, res, next) {
        var fileName = url.parse(req.url);
        fileName = fileName.href.split(fileName.search).join("");
        var fileExists = fs.existsSync(folder + fileName);
        if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
          req.url = "/" + defaultFile;
        }
        return next();
      }
    }
  });
});
