const rp = require('request-promise')
const cheerio = require('cheerio')

const options = {
  uri: 'https://vacina.campinas.sp.gov.br/grupos/pessoas',
  transform: function (body) {
    return cheerio.load(body)
  }
}

function processarDados(dados){
  //salva no banco de dados
  console.log(JSON.stringify(dados))
}

rp(options)
.then(($) => {
  const a = []
  $('.text-align-center').each((i, item) => {

    const b = {
      texto: $().find().text(strong),
      //posicao: parseInt($(item).find('.tabela-times-posicao').text())
    }

  //  if(time.nome !== "")
  //    times.push(time)
  })
  processarDados(a)
})
.catch((err) => {
  console.log(err);
})
