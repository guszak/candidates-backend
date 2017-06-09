var mandrill = require('mandrill-api/mandrill')

function Result () {
  this.html = 0
  this.css = 0
  this.javascript = 0
  this.python = 0
  this.django = 0
  this.ios = 0
  this.android = 0
}

Result.prototype.setName = function (name) {
  this.name = name
}
Result.prototype.setEmail = function (email) {
  this.email = email
}
Result.prototype.setCriteria = function (criteria) {
  this.criteria = criteria
}
Result.prototype.sendEmail = function () {
	// Compose transactional e-mail for send to candidate
  var message = {
    'subject': 'Obrigado por se candidatar',
    'from_email': process.env.MANDRILL_SENDER_EMAIL,
    'from_name': process.env.MANDRILL_SENDER_NAME,
    'to': [{
      'email': this.email,
      'name': this.name,
      'type': 'to'
    }]
  }

	// Required by Mandrill API, but not used
  var templateContent = [{
    'name': 'RESULT',
    'content': 'RESULT'
  }]

  var parameters = {
    'template_name': 'result',
    'template_content': templateContent,
    'message': message
  }

  var mandrillClient = new mandrill.Mandrill(process.env.MANDRILL_API_KEY)

	// for each criteria, send one e-mail
  for (var i = this.criteria.length - 1; i >= 0; i--) {
		// Merge crtiteria content with template var
    var globalMergeVars = [{
      'name': 'RESULT',
      'content': this.criteria[i]
    }]

    parameters.message.global_merge_vars = globalMergeVars

		// Send E-mail to candidate
    mandrillClient.messages.sendTemplate(parameters, function (result) {
      console.log(result)
    }, function (e) {
			// Mandrill returns the error as an object with name and message keys
      console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message)
    })
  }
}

module.exports = Result
