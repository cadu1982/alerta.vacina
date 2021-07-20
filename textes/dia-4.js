const request = require('request');

  r = request(`https://vacina.campinas.sp.gov.br/agendamento-grupos`, function (error, response, body) {
  console.log('body:', body); // Print the HTML for the Google homepage.
  linha = function searchValues(body)
  let str = "linha"
  let re = /[-0-9]{2}/
  console.log(str.search(linha))  // retorna 4, que é o índice da primeira letra maiúscula "J"
