const fetch = require('node-fetch')
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")


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

dotenv.config()

// PEGAR IDADE DO ARQUIVO ?
var idade_arquivo =

if (idade_arquivo == idade){
  console.log("São iguais, faço nada !")
}
else: //manda e-mail
  let transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      port:465,
      secure:true,
      auth: {
          user:"LOGIN",
          pass:"PASSWORD"
      }
  })

  transporter.sendMail({
      from: "Cadu <cadu.lp@gmail.com>",
      to: "caca-andrdae@bol.com.br",
      subject: "Mudou a idade para agendar a vacina !!!",
      text: "Favor verificar no site: https://vacina.campinas.sp.gov.br/agendamento-grupos"
  }).then(message => {
        console.log(message)
  }).catch(err => {
        console.log(err)
  })
