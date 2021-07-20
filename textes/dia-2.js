const fetch = require('node-fetch')

request('https://vacina.campinas.sp.gov.br/agendamento-grupos')
    .then(res => res.text())
    .then(body => console.log(body));
