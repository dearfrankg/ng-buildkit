

describe 'HomeCtrl', ->

  scope = undefined

  beforeEach ->
    module 'NgBuildkit'

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    $controller('HomeCtrl', {
      $scope: scope
    })

    scope.$digest() # to resolve promises if you're using them


  describe 'Initialization', ->

    it 'should initialize scope.features to an array of features', ->

      expect(scope.features.length).toBeGreaterThan 10




