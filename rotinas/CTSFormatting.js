
/*
 * ----------------------------------------------------------------------------------------------------
 * CTS Educare - Solutions for Trainings and Courses.
 * Copyright (c) 2018. All rights reserved.
 *
 * The CTSFormatting class provide resources to format name, document numbers and much others.
 *
 * Author: Eros Vitor Bornatowski (erosborna@gmail.com)
 * ----------------------------------------------------------------------------------------------------
 */

function isDigit(char)
{
  var num = parseInt(char);
  return !isNaN(num);
}

function cpfRetirarFormatacao(cpf)
{
  var cpfSemFormatacao = "";

  for (var i=0; i < cpf.length; i++) {
    if (isDigit(cpf.charAt(i))) {
      cpfSemFormatacao += cpf.charAt(i);
    }
  }

  return cpfSemFormatacao;
}

function cpfAplicarFormatacao(cpf)
{
  var temp = cpfRetirarFormatacao(cpf);

  if (temp.length != 11) {
    return cpf;
  } else {
    return temp.substring(0, 3) + "." + temp.substring(3, 6) + "." + temp.substring(6, 9) + "-" + temp.substring(9, 11);
  }
}

function cnpjRetirarFormatacao(cnpj)
{
  var cnpjSemFormatacao = "";

  for (var i=0; i < cnpj.length; i++) {
    if (isDigit(cnpj.charAt(i))) {
      cnpjSemFormatacao += cnpj.charAt(i);
    }
  }

  return cnpjSemFormatacao;
}

function cnpjAplicarFormatacao(cnpj)
{
  var temp = cnpjRetirarFormatacao(cnpj);

  if (temp.length != 14) {
    return cnpj;
  } else {
    return temp.substring(0, 2) + "." + temp.substring(2, 5) + "." + temp.substring(5, 8) + "/" + temp.substring(8, 12) + "-" + temp.substring(12, 14);
  }
}

function formatPersonalName(name)
{
  var str = name.charAt(0).toUpperCase();
  for (var i=1; i < name.length; i++) {
    if (name.charAt(i) == ' ') {
      i++;
      str += ' ';
      str += name.charAt(i).toUpperCase();
    }
    else {
      str += name.charAt(i).toLowerCase();
    }
  }
  return str;
}

