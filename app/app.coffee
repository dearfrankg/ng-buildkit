
# include major components
require 'lodash'
require 'jquery'
require 'angular'
require 'plugin'


angular.module('NgBuildkit', ['MyPartials', 'ui.router'])

# include app components
require 'angular-ui-router'
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