
/*
 * ----------------------------------------------------------------------------------------------------
 * CTS Educare - Solutions for Trainings and Courses.
 * Copyright (c) 2018. All rights reserved.
 *
 * A classe CTSExtensoData fornece recursos para converter uma data, ou partes de uma data, em uma
 * representação por extenso.
 *
 * Por exemplo, a data 10/10/2010 é convertida para 10 de outubro de 2010.
 *
 * Autor: Eros Vitor Bornatowski (erosborna@gmail.com)
 * ----------------------------------------------------------------------------------------------------
 */

var WEEKDAYS = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];
var WEEKDAYS_FULL = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"];
var MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

function getWeekdayName(day) {
  if (day < 1 || day > 7) {
    return "invalid day week";
  } else {
    return WEEKDAYS[day-1];
  }
}

function getWeekdayFullname(day) {
  if (day < 1 || day > 7) {
    return "invalid day week";
  } else {
    return WEEKDAYS_FULL[day-1];
  }
}

function getMonthName(month) {
  if (month < 1 || month > 12) {
    return "invalid month";
  } else {
    return MONTHS[month-1];
  }
}

function getDay(date) {
  var dayStr = "";

  dayStr += date.charAt(0);
  dayStr += date.charAt(1);

  return parseInt(dayStr);
}

function getMonth(date) {
  var monthStr = "";

  monthStr += date.charAt(3);
  monthStr += date.charAt(4);

  return parseInt(monthStr);
}

function getYear(date) {
  var yearStr = "";

  yearStr += date.charAt(6);
  yearStr += date.charAt(7);
  yearStr += date.charAt(8);
  yearStr += date.charAt(9);

  return parseInt(yearStr);
}

function dateIsValid(date) {
  var PATTERN_DATE_BRAZIL = "^([\\d]|[0-2][\\d]|3[0-1])\\/([\\d]|0[\\d]|1[0-2])\\/\\d{4}$";
  return date != null && date.match(PATTERN_DATE_BRAZIL);
}

function gerarExtensoData(date) {
  if (date == null || !dateIsValid(date)) {
    return "invalid date";
  } else {
    var day = getDay(date);
    var month = getMonth(date);
    var year = getYear(date);
    return day  + " de " + getMonthName(month) + " de " + year;
  }
}

