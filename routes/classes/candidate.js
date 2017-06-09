var validator = require('email-validator')

function Candidate () {
  this.name = ''
  this.email = ''
  this.error = ''
}

Candidate.prototype.setName = function (name) {
  this.name = name
}
Candidate.prototype.setEmail = function (email) {
  this.email = email
}
Candidate.prototype.getName = function () {
  return this.name
}
Candidate.prototype.getEmail = function () {
  return this.email
}
Candidate.prototype.valid = function () {
  if (!this.name) {
    this.error = 'O preenchimento do Nome é obrigatório'
  } else if (!this.email) {
    this.error = 'O preenchimento do E-mail é obrigatório'
  } else if (!validator.validate(this.email)) {
    this.error = 'O E-mail está em um formato inválido'
  }
}
Candidate.prototype.getError = function () {
  return this.error
}

module.exports = Candidate
