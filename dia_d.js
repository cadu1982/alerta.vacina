const fetch = require('node-fetch')
//var RegexPaser = require('regex-parser')

  fetch ('https://vacina.campinas.sp.gov.br/agendamento-grupos',)
    .then(res => res.text())
    .then(body => console.log(body));

    var str = "text";
    var re = /(Pessoas a partir de[0-9]{2})/;
    var found = str.match(re);

  console.log(found);

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
