
describe 'NgBuildkit Home Page', ->

  it 'should have a title', ->

    browser.get('http://mbp/')

    expect(browser.getTitle()).toEqual('NgBuildkit')
