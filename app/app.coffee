
_       = require 'lodash'
jQuery  = require 'jquery'
angular = require 'angular'
plugin  = require 'plugin'


# include angular components
require 'angular-route'


angular.module('NgBuildkit', ['ngRoute'])


# include app components
require './config/routes'
require './modules/modules'


# test that the libs are working
console.log('lodash', _)
console.log('jQuery', jQuery)
console.log('angular', angular)
console.log('plugin', plugin)


plugin()