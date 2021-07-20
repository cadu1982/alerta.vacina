const fetch = require('node-fetch')
//var RegexPaser = require('regex-parser')

  fetch ('https://vacina.campinas.sp.gov.br/agendamento-grupos',)
    .then(res => res.text())
    .then(body => {
      // console.log(body)
      var re_linha = /Pessoas a partir de [0-9]{2}/; // Pessoas a partir de 33 anos
      var linhaIdade = re_linha.exec(body)
      var re_idade = /[0-9]{2}/;
      var idade = re_idade.exec(linhaIdade)
      console.log("Partiu vacinar quem tem: " + idade[0]);

    }
  );
    //



//  const body  = "a partir de [0-9]{2}";
  //const regexWhiteSpace = /\s/g;
  //const [nome, sobrenome] = nomeCompleto.replace(regexWhiteSpace,'').split(',')

  //console.log('body:',body)
  //console.log('sobrenome:',sobrenome)

    //.then().findall("a partir de [0-9]{2}",(text))[0]
    //.then().findall("[0-9]{2}",(linha))[0]
    //console.log(text)

    //.then(res => res.text())
    //.then(body => console.log(body))
    //.catch(e => console.log("Deu Erro:" + e,message))

    //var Regex = require("regex");
    //var regex = new Regex("a partir de [0-9]{2}")
    //console.log(Regex)

    //let text = "a partir de 35";
    //let n = text.search(/a partir de 35/i);
    //console.log(text)
