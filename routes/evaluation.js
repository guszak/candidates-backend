var Candidate = require('../routes/classes/candidate')
var Knowledge = require('../routes/classes/knowledge')
var Result = require('../routes/classes/result')

/**
* @name: post;
* @description: Evaluation post process;
* @author: Lucas Guszak;
* @date: 08/06/2017;
*/
exports.post = function (req, res) {
  var error = ''
  var evaluation = req.body

  // Validate candidate info
  var candidate = new Candidate()
  candidate.setName(evaluation.name)
  candidate.setEmail(evaluation.email)
  candidate.valid()
  error = candidate.getError()

  if (!error) {
    // Define knowledge values
    var knowledge = new Knowledge()
    knowledge.setHtml(evaluation.html)
    knowledge.setCss(evaluation.css)
    knowledge.setJavascript(evaluation.javascript)
    knowledge.setPython(evaluation.python)
    knowledge.setDjango(evaluation.django)
    knowledge.setIos(evaluation.ios)
    knowledge.setAndroid(evaluation.android)
  }

  // Exit process having error
  if (error) {
    res.status(400).send(error)
    return
  }

  var name = candidate.getName()
  var email = candidate.getEmail()

  // Verifies in which criterion the candidate combines
  var criteria = knowledge.getCriteria()

  // Compose transactional e-mail for send to candidate
  var result = new Result()
  result.setName(name)
  result.setEmail(email)
  result.setCriteria(criteria)
  result.sendEmail()

  res.send('ok')
}
