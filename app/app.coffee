
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
checkGlobals = ->
  if (
    (typeof _ is 'function') and
    (typeof $ is 'function') and
    (typeof angular is 'object') and
    (typeof plugin is 'function')
  )
    console.log('Globals have been verified!: _, $, angular, and plugin.')

checkGlobals()