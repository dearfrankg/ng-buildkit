
angular.module('NgBuildkit')

  .config(['$routeProvider',  ($routeProvider) ->

    $routeProvider

      .when( '/', {
        templateUrl: 'modules/index/splash.html'
        controller: 'SplashCtrl'
      })

  ])
