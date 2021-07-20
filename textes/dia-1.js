var request = require("request")
var cheerio = require("cheerio")

request ('https://vacina.campinas.sp.gov.br/agendamento-grupos', function(err, res, body) {
  if (err) console.log('Erro: ' + err)

  var $ = cheerio.load(body)

  $(".card-title").each(function() {
    var texto = $(this).find(".p").text()

    console.log("texto: " + texto)

  } )
})
