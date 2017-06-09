var chai = require('chai')
var expect = chai.expect
var Knowledge = require('../routes/classes/knowledge')

describe('Knowledge', function () {
  it('getCriteria() should return [] if no properties set', function () {
    var knowledge = new Knowledge()
    expect(knowledge.getCriteria()).to.eql([''])
  })
})

describe('Knowledge', function () {
  it('getCriteria() should return [""] if all properties set 0', function () {
    var knowledge = new Knowledge()
    knowledge.setHtml(0)
    knowledge.setCss(0)
    knowledge.setJavascript(0)
    knowledge.setPython(0)
    knowledge.setDjango(0)
    knowledge.setIos(0)
    knowledge.setAndroid(0)
    expect(knowledge.getCriteria()).to.eql([''])
  })
})

describe('Knowledge', function () {
  it('getCriteria() should return [""] if all properties set 6', function () {
    var knowledge = new Knowledge()
    knowledge.setHtml(6)
    knowledge.setCss(6)
    knowledge.setJavascript(6)
    knowledge.setPython(6)
    knowledge.setDjango(6)
    knowledge.setIos(6)
    knowledge.setAndroid(6)
    expect(knowledge.getCriteria()).to.eql([''])
  })
})

describe('Knowledge', function () {
  it('getCriteria() should return ["Front-End","Back-End","Mobile"] if all properties set 7', function () {
    var knowledge = new Knowledge()
    knowledge.setHtml(7)
    knowledge.setCss(7)
    knowledge.setJavascript(7)
    knowledge.setPython(7)
    knowledge.setDjango(7)
    knowledge.setIos(7)
    knowledge.setAndroid(7)
    expect(knowledge.getCriteria()).to.eql(['Front-End', 'Back-End', 'Mobile'])
  })
})

describe('Knowledge', function () {
  it('getCriteria() should return ["Front-End","Back-End","Mobile"] if all properties set 10', function () {
    var knowledge = new Knowledge()
    knowledge.setHtml(10)
    knowledge.setCss(10)
    knowledge.setJavascript(10)
    knowledge.setPython(10)
    knowledge.setDjango(10)
    knowledge.setIos(10)
    knowledge.setAndroid(10)
    expect(knowledge.getCriteria()).to.eql(['Front-End', 'Back-End', 'Mobile'])
  })
})

describe('Knowledge', function () {
  it('getCriteria() should return [""] if all properties set 11', function () {
    var knowledge = new Knowledge()
    knowledge.setHtml(11)
    knowledge.setCss(11)
    knowledge.setJavascript(11)
    knowledge.setPython(11)
    knowledge.setDjango(11)
    knowledge.setIos(11)
    knowledge.setAndroid(11)
    expect(knowledge.getCriteria()).to.eql([''])
  })
})

describe('Knowledge', function () {
  it('getCriteria() should return ["Front-End"] if html, css and javascript properties set 7', function () {
    var knowledge = new Knowledge()
    knowledge.setHtml(7)
    knowledge.setCss(7)
    knowledge.setJavascript(7)
    expect(knowledge.getCriteria()).to.eql(['Front-End'])
  })
})

describe('Knowledge', function () {
  it('getCriteria() should return ["Back-End"] if python, django properties set 7', function () {
    var knowledge = new Knowledge()
    knowledge.setPython(7)
    knowledge.setDjango(7)
    expect(knowledge.getCriteria()).to.eql(['Back-End'])
  })
})

describe('Knowledge', function () {
  it('getCriteria() should return ["Mobile"] if ios, android properties set 7', function () {
    var knowledge = new Knowledge()
    knowledge.setIos(7)
    knowledge.setAndroid(7)
    expect(knowledge.getCriteria()).to.eql(['Mobile'])
  })
})
