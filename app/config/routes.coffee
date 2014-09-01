
angular.module('NgBuildkit')

  .config(['$routeProvider',  ($routeProvider) ->

    $routeProvider

      .when( '/', {
        templateUrl: '/partials/modules/index/splash.tpl.html'
        controller: 'SplashCtrl'
      })

  ])
