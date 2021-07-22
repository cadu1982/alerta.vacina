const fetch = require('node-fetch')
//var RegexPaser = require('regex-parser')

  fetch ('https://vacina.campinas.sp.gov.br/agendamento-grupos',)
    .then(res => res.text())
    .then(body => {
      // console.log(body)
      var re_linha = /Pessoas a partir de [0-9]{2}/; // Pessoas a partir de 33 anos
      var linhaIdade = re_linha.exec(body)
      var re_idade = /[0-9]{2}/;
      var idade = re_idade.exec(linhaIdade)
      console.log("Partiu vacinar quem tem: " + idade[0]);

    }
  );
    //
