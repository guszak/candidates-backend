function Knowledge () {
  this.html = 0
  this.css = 0
  this.javascript = 0
  this.python = 0
  this.django = 0
  this.ios = 0
  this.android = 0
  this.error = ''
}

Knowledge.prototype.setHtml = function (value) {
  value = parseInt(value)
  if (!isNaN(value)) { this.html = value }
}
Knowledge.prototype.setCss = function (value) {
  value = parseInt(value)
  if (!isNaN(value)) { this.css = value }
}
Knowledge.prototype.setJavascript = function (value) {
  value = parseInt(value)
  if (!isNaN(value)) { this.javascript = value }
}
Knowledge.prototype.setPython = function (value) {
  value = parseInt(value)
  if (!isNaN(value)) { this.python = value }
}
Knowledge.prototype.setDjango = function (value) {
  value = parseInt(value)
  if (!isNaN(value)) { this.django = value }
}
Knowledge.prototype.setIos = function (value) {
  value = parseInt(value)
  if (!isNaN(value)) { this.ios = value }
}
Knowledge.prototype.setAndroid = function (value) {
  value = parseInt(value)
  if (!isNaN(value)) { this.android = value }
}
Knowledge.prototype.isCriteria = function (value) {
  return (value >= 7 && value <= 10)
}
Knowledge.prototype.getCriteria = function () {
  var criteria = []

  if (this.isCriteria(this.html) && this.isCriteria(this.css) && this.isCriteria(this.javascript)) {
    criteria.push('Front-End')
  }

  if (this.isCriteria(this.python) && this.isCriteria(this.django)) {
    criteria.push('Back-End')
  }

  if (this.isCriteria(this.ios) && this.isCriteria(this.android)) {
    criteria.push('Mobile')
  }

  if (criteria.length === 0) {
    criteria.push('')
  }
  return criteria
}

module.exports = Knowledge
