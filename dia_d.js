const fetch = require('node-fetch')
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")
var fs = require("fs")


fetch('https://vacina.campinas.sp.gov.br/agendamento-grupos', )
    .then(res => res.text())
    .then(body => {
            // console.log(body)
            var re_linha = /Pessoas a partir de [0-9]{2}/; // Pessoas a partir de 33 anos
            var linhaIdade = re_linha.exec(body)
            var re_idade = /[0-9]{2}/;
            var idade = re_idade.exec(linhaIdade)
            //console.log (idade)
            var idade_arquivo = fs.readFileSync("/tmp/vacina/arquivo.json", "utf8")
            //console.log (idade_arquivo)


            if (idade == idade_arquivo) {
                console.log("São iguais, ainda não mudou!");
            } else {
              console.log("Mudou, enviar alerta por e-mail!")
              dotenv.config()
              transporter = nodemailer.createTransport({
                  host: "smtp.gmail.com",
                  port: 465,
                  secure: true,
                  auth: {
                      user: "LOGIN",
                      pass: "PASSWORD"
                  }
              })

              transporter.sendMail({
                  from: "Cadu <cadu.lp@gmail.com>",
                  to: "caca-andrade@bol.com.br",
                  subject: "Mudou a idade para agendar a vacina !!!",
                  text: "Favor verificar no site: https://vacina.campinas.sp.gov.br/agendamento-grupos"
              }).then(message => {
                  console.log(message)
              }).catch(err => {
                  console.log(err)
              })

              //Atualiza o arquivo no pc !!!
              fs.writeFileSync("/tmp/vacina/arquivo.json", idade, function(err) {
                  if (err) return console.log(err)
                  console.log("arquivo.json foi atualizado !")
              })

            }
