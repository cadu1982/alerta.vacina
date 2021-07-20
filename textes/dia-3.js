var Regex = require('regex')
var request = require('request');

// print(dir(r))
// print (r.status_code)  # 200 significa requisição
// print(r.text)

//def pega_idade_site():
    r = request.get('https://vacina.campinas.sp.gov.br/agendamento-grupos')
    linha = regex.findall("a partir de [0-9]{2}",(r.text))[0]
    return regex.findall("[0-9]{2}",(linha))[0]

//def pega_idade_arquivo():
    f = open("/tmp/vacina", "r")
    f_vacina = f.readlines()[0]
    f.close()
    return f_vacina


//if int(pega_idade_arquivo()) == int(pega_idade_site()):
  //  print("Sao iguais, faco nada")
//else:
  //  print("Sao diferentes mando email")
  //  f = open("/tmp/vacina", "w")
  //  f.writelines([pega_idade_site()])
  //  f.close()
