

angular.module('NgBuildkit')

  .controller('HomeCtrl', ['$scope', ($scope) ->

    $scope.features = [
      {name: 'Dependency Management (npm, bower, browserify with browserify-shim)'}
      {name: 'Pre and Post Processing (linting, minification)'}
      {name: 'Scripts (javascript and or coffee-script with source maps!)'}
      {name: 'Styles (sass with bootstrap-sass, compass and source maps!)'}
      {name: 'Images (optimization and interlacing)'}
      {name: 'Markup (dynamic markup using handlebar templates)'}
      {name: 'Handlebars (template processing for any file)'}
      {name: 'BrowserSync (test multiple targets simulatenously)'}
      {name: 'Live Reloading in html5Mode'}
      {name: 'Documentation (docular)'}
      {name: 'Continuous Development (unit and integration testing with karma and protractor)'}
      {name: 'Continuous Integration (travis)'}
      {name: 'Continuous Deployment (bump, rev, and changlelog)'}
      {name: 'Opinionated library selection (bootstrap-sass, ui-router, ui-bootstrap, lodash, etc.)'}
    ]

    # execute non common-js vendor code
    plugin()

  ])



