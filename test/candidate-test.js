var chai = require('chai')
var expect = chai.expect
var Candidate = require('../routes/classes/candidate')

describe('Candidate', function () {
  it('valid() should return "O preenchimento do Nome é obrigatório" if no properties set', function () {
    var candidate = new Candidate()
    candidate.valid()
    expect(candidate.getError()).to.equal('O preenchimento do Nome é obrigatório')
  })
})

describe('Candidate', function () {
  it('valid() should return "O preenchimento do E-mail é obrigatório" if the only name property is filled', function () {
    var candidate = new Candidate()
    candidate.setName('foo')
    candidate.valid()
    expect(candidate.getError()).to.equal('O preenchimento do E-mail é obrigatório')
  })
})

describe('Candidate', function () {
  it('valid() should return "O E-mail está em um formato inválido" if the email property is filled wrong', function () {
    var candidate = new Candidate()
    candidate.setName('foo')
    candidate.setEmail('bar')
    candidate.valid()
    expect(candidate.getError()).to.equal('O E-mail está em um formato inválido')
  })
})

describe('Candidate', function () {
  it('valid() should return "O E-mail está em um formato inválido" if the email property are filled wrong', function () {
    var candidate = new Candidate()
    candidate.setName('foo')
    candidate.setEmail('foo@bar')
    candidate.valid()
    expect(candidate.getError()).to.equal('O E-mail está em um formato inválido')
  })
})

describe('Candidate', function () {
  it('valid() should return "" if the name and email properties are filled correctly', function () {
    var candidate = new Candidate()
    candidate.setName('foo')
    candidate.setEmail('foo@bar.foo')
    candidate.valid()
    expect(candidate.getError()).to.equal('')
  })
})
