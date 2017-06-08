var validator = require("email-validator");
var mandrill = require('mandrill-api/mandrill');

/**
* @name: post;
* @description: Evaluation post process;
* @author: Lucas Guszak;
* @date: 08/06/2017;
*/
exports.post = function(req,res){

  var error = '';
  var evaluation = req.body;
  var knowledgeFields = ["html", "css", "javascript", "python","django","ios","android"];
  
  // Define default value
  Object.keys(evaluation).map(function(key, index) {
    if (evaluation[key] == null)
      evaluation[key] = '';
  });

  // Valid values from request 
  if( !evaluation.name )
    error = 'O preenchimento do nome é obrigatório';
  
  else if( !evaluation.email )
    error = 'O preenchimento do E-mail é obrigatório';
  
  else if( !validator.validate( evaluation.email ) )
    error = 'O E-mail está em um formato inválido';

  // Valid rating fields
  Object.keys(evaluation).map(function(key, index) {

    if (knowledgeFields.indexOf(key) >= 0 && evaluation[key] != ""){
      evaluation[key] = parseInt(evaluation[key]);

      if( isNaN( evaluation[key] ) )
        error = 'O campo ' + key + ' está em um formato inválido';

      else if(evaluation[key] < 0 || evaluation[key] > 10)
        error = 'O campo ' + key + ' deve ser um número entre 0 e 10';
    }
  });

  // Exit process having error
  if(error){
    res.status(400).send(error);
    return;
  }

  // Define evaluation criteria 
  var criteria = [];
  if(evaluation.html >= 7 && evaluation.css >= 7 && evaluation.javascript >= 7)
    criteria.push('Front-End');
  
  if(evaluation.python >= 7 && evaluation.django >= 7)
    criteria.push('Back-End');
  
  if(evaluation.ios >= 7 && evaluation.android >= 7)
    criteria.push('Mobile');

  if(criteria.length == 0)
    criteria.push('');

  // Compose transactional e-mail for send to candidate
  var message = {
    "subject": "Obrigado por se candidatar",
    "from_email": process.env.MANDRILL_SENDER_EMAIL,
    "from_name": process.env.MANDRILL_SENDER_NAME,
    "to": [{
      "email": evaluation.email,
      "name": evaluation.name,
      "type": "to"
    }]
  };

  // Required by Mandrill API, but not used
  var template_content = [{
    "name": "RESULT",
    "content": 'RESULT'
  }];

  var parameters = {
    "template_name": "result",
    "template_content": template_content,
    "message": message
  };

  mandrill_client = new mandrill.Mandrill( process.env.MANDRILL_API_KEY );
  
  // for each criteria, send one e-mail
  for (var i = criteria.length - 1; i >= 0; i--) {

    // Merge crtiteria content with template var
    var global_merge_vars = [{
      "name": "RESULT",
      "content": criteria[i]
    }];

    parameters.message.global_merge_vars = global_merge_vars;

    // Send E-mail to candidate
    mandrill_client.messages.sendTemplate(parameters, function(result) {
      console.log(result);
    }, function(e) {

      // Mandrill returns the error as an object with name and message keys
      console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    });
  }
  res.send('ok');
};