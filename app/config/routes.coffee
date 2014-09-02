
angular.module('NgBuildkit')

  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->

    $locationProvider.html5Mode(true)

    $routeProvider

      .when( '/', {
        templateUrl: '/partials/modules/index/splash.tpl.html'
        controller: 'SplashCtrl'
      })

      .when( '/about', {
        templateUrl: '/partials/modules/about/about.tpl.html'
      })

      .otherwise('/')

  ])
