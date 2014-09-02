
# include major components
require 'lodash'
require 'jquery'
require 'angular'
require 'plugin'


# include angular components
require 'angular-route'

angular.module('NgBuildkit', ['MyPartials', 'ngRoute'])

# include app components
require './templates'
require './config/routes'
require './modules/modules'


# test that the libs have exported to global
console.log('lodash', _)
console.log('jQuery', $)
console.log('angular', angular)
console.log('plugin', plugin)


# execute non common-js vendor code
angular.module('NgBuildkit')
  .run( ($timeout) ->
    $timeout( ->
      plugin()
    , 30)
  )