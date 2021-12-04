
/*
 * ----------------------------------------------------------------------------------------------------
 * CTS Educare - Solutions for Trainings and Courses.
 * Copyright (c) 2018. All rights reserved.
 *
 * The CTSValidation class provide resources to validate names, emails, dates, telephones numbers, zip
 * codes and much others.
 *
 * Author: Eros Vitor Bornatowski (erosborna@gmail.com)
 * ----------------------------------------------------------------------------------------------------
 */

var PATTERN_PERSONAL_NAME = "^[a-zA-ZáàâãéèêíïóôõöúçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ ]+$";
var PATTERN_EMAIL = "^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\\.[a-zA-Z]{2,4}$";
var PATTERN_DATE_BRAZIL = "^([\\d]|[0-2][\\d]|3[0-1])\\/([\\d]|0[\\d]|1[0-2])\\/\\d{4}$";

function cnpjIsValid(cnpj)
{
  if (cnpj == null || cnpj.trim().length != 14) {
    return false;
  }

  if (cnpj == "00000000000000" || cnpj == "11111111111111" ||
      cnpj == "22222222222222" || cnpj == "33333333333333" ||
      cnpj == "44444444444444" || cnpj == "55555555555555" ||
      cnpj == "66666666666666" || cnpj == "77777777777777" ||
      cnpj == "88888888888888" || cnpj == "99999999999999")
    return false;

  var digito = 0;
  var soma = 0;
  var resto = 0;
  var peso = 0;
  var i;
  var digitosCalculados;

  // --------------------------------------------------------------------------------
  // Calculando o primeiro dígito verificador
  peso = 2;
  for (i=12; i > 0; i--) {
    digito = parseInt(cnpj.substring(i-1, i));
    soma += digito * (peso++);
    if (peso == 10)
      peso = 2;
  }
  resto = soma % 11;
  if ((resto == 0) || (resto == 1))
    digitosCalculados = "0";
  else {
    resto = 11 - resto;
    digitosCalculados = resto.toString();
  }

  // --------------------------------------------------------------------------------
  // Calculando o segundo dígito verificador
  soma = 0;
  peso = 2;
  for (i=13; i > 0; i--) {
    digito = parseInt(cnpj.substring(i-1, i));
    soma += digito * (peso++);
    if (peso == 10)
      peso = 2;
  }
  resto = soma % 11;
  if ((resto == 0) || (resto == 1))
    digitosCalculados += "0";
  else {
    resto = 11 - resto;
    digitosCalculados += resto.toString();
  }

  return (cnpj.substring(12, 14) == digitosCalculados);
}

function cpfIsValid(cpf)
{
  if (cpf == null || cpf.trim().length != 11) {
    return false;
  }

  if (cpf == "00000000000" || cpf == "11111111111" ||
      cpf == "22222222222" || cpf == "33333333333" ||
      cpf == "44444444444" || cpf == "55555555555" ||
      cpf == "66666666666" || cpf == "77777777777" ||
      cpf == "88888888888" || cpf == "99999999999")
    return false;

  var digito = 0;
  var soma = 0;
  var resto = 0;
  var peso = 0;
  var i;
  var digitosCalculados;

  // --------------------------------------------------------------------------------
  // Calculando o primeiro dígito verificador
  peso = 10;
  for (i=1; i <= 9; i++) {
    digito = parseInt(cpf.substring(i-1, i));
    soma += digito * (peso--);
  }
  resto = soma % 11;
  if ((resto == 0) || (resto == 1))
    digitosCalculados = "0";
  else {
  resto = 11 - resto;
    digitosCalculados = resto.toString();
  }

  // --------------------------------------------------------------------------------
  // Calculando o segundo dígito verificador
  soma = 0;
  resto = 0;
  peso = 11;
  for (i=1; i <= 10; i++) {
    digito = parseInt(cpf.substring(i-1, i));
    soma += digito * (peso--);
  }
  resto = soma % 11;
  if ((resto == 0) || (resto == 1))
    digitosCalculados += "0";
  else {
  resto = 11 - resto;
    digitosCalculados += resto.toString();
  }

  return (cpf.substring(9, 11) == digitosCalculados);
}

function dateIsValid(date) {
  return date != null && date.match(PATTERN_DATE_BRAZIL);
}

function emailIsValid(email) {
  return email != null && email.match(PATTERN_EMAIL);
}

function isLeapYear(date) {
  var yearStr = "";
  yearStr += date.charAt(6);
  yearStr += date.charAt(7);
  yearStr += date.charAt(8);
  yearStr += date.charAt(9);

  var year = parseInt(yearStr);

  return (((year % 4) == 0) && (((year % 400) == 0) || ((year % 100) != 0)));
}

function personalNameIsValid(name) {
  return name != null && name.match(PATTERN_PERSONAL_NAME);
}


