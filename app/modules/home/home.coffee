

angular.module('NgBuildkit')

  .controller('HomeCtrl', ['$scope', '$timeout', ($scope, $timeout) ->

    $scope.features = [
      {name: 'Dependency Management (npm, bower, browserify with browserify-shim)'}
      {name: 'SASS (with bootstrap-sass, compass and source maps!)'}
      {name: 'CoffeeScript (with source maps!)'}
      {name: 'Handlebars (For dynamic HTML)'}
      {name: 'Live Reloading in html5Mode'}
      {name: 'BrowserSync serves to multiple targets'}
      {name: 'Notification Center (Handles Error Notifications)'}
      {name: 'Non common-js vendor code (like a jQuery plugin)'}
    ]

    # execute non common-js vendor code
    $timeout( ->
      plugin()
    , 30)

  ])



