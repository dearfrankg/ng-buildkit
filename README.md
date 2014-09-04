Ng-Buildkit
============

Ng-Buildkit was designed to automate tasks associated with development and allow for a continous cycle of development, integration, and deployment.

Starter AngularJS + Gulp + Browserify project equipped to handle the following:

- Dependency Management (npm, bower, browserify with browserify-shim)
- Pre and Post Processing (linting, minification)
- Scripts (javascript and or coffee-script with source maps!)
- Styles (sass with bootstrap-sass, compass and source maps!)
- Images (optimized and progresive)
- Markup (dynamic markup using handlebar templates)
- Handlebars (template processing for any file)
- BrowserSync (test multiple targets simulatenously)
- Live Reloading in html5Mode
- Documentation (docular)
- Testing (unit and integration testing with karma and protractor)
- Travis (travis)
- Deployment (bump, rev, and changlelog)
- Opinionated (bootstrap-sass, ui-router, ui-bootstrap, lodash, etc.)



## Instalation


```
git clone https://github.com/dearfrankg/ng-buildkit
```


## Major gulp commands


`gulp` default gulp command

This command is equivelant to `gulp watch`.  To summarize it will watch and update, test and sync browser on changes.

__dependency graph__

`gulp-command: depends-on-this (then runs this)`

```
watch: browsersync
browsersync: build (browsersync)
build: browserify, images, sass, markup
browserify: templates, lint (browserify)
images: (images)
sass: images (sass)
markup: fonts, rev (index.hbs to index.html)
```

`gulp unit` run unit tests

`gulp e2e` run e2e tests

`gulp test` run unit and e2e tests

`gulp bump-patch` bump version to next patch rev, commit and tag

`gulp bump-minor` bump version to next minor rev, commit and tag

`gulp bump-major` bump version to next major rev, commit and tag


## Travis Status

[![Build Status](https://travis-ci.org/dearfrankg/ng-buildkit.svg?branch=master)](https://travis-ci.org/dearfrankg/ng-buildkit)



## License

The MIT License (MIT)

Copyright (c) 2014 Frank Gutierrez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.










<div style="height:500px;"></div>

































