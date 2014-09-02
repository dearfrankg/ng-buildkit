
angular.module('NgBuildkit')

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) ->

      $locationProvider.html5Mode(true)

      $urlRouterProvider.otherwise("/")

      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: '/partials/modules/index/splash.tpl.html'
          controller: 'SplashCtrl'
        })
        .state('about', {
          url: "/about",
          templateUrl: '/partials/modules/about/about.tpl.html'
        })

  ])
