

angular.module('NgBuildkit')

  .controller('SplashCtrl', ['$scope',  ($scope) ->

    $scope.features = [
      {name: 'Dependency Management (npm, bower, browserify with browserify-shim)'}
      {name: 'SASS (with compass and source maps!)'}
      {name: 'CoffeeScript (with source maps!)'}
      {name: 'Handlebars (For dynamic HTML)'}
      {name: 'Live Reloading in html5Mode (BrowserSync serves to multiple targets)'}
      {name: 'Notification Center (Handles Error Notifications)'}
      {name: 'Non common-js vendor code (like a jQuery plugin)'}
    ]

  ])



