
/*
 * ----------------------------------------------------------------------------------------------------
 * CTS Educare - Solutions for Trainings and Courses.
 * Copyright (c) 2018. All rights reserved.
 *
 * The CTSConversion class provide resources to conversion of values dates and texts.
 *
 * Author: Eros Vitor Bornatowski (erosborna@gmail.com)
 * ----------------------------------------------------------------------------------------------------
 */

function secondsToHours(segundos) {
  var horasStr = "";
  var minutos = 0;
  var horas = 0;

  minutos = segundos / 60;
  segundos = segundos % 60;
  if (minutos >= 60) {
    horas = minutos / 60;
    minutos = minutos % 60;
  }

  horasStr += horas < 10 ? "0"+horas.toFixed(0) : horas.toFixed(0);
  horasStr += ":";
  horasStr += minutos < 10 ? "0"+minutos.toFixed(0) : minutos.toFixed(0);
  horasStr += ":";
  horasStr += segundos < 10 ? "0"+segundos.toFixed(0) : segundos.toFixed(0);

  return horasStr;
}

function hoursToSeconds(horas) {
  var tmp = "";
  var hours;
  var minutes;
  var seconds;
  var totalSeconds;

  tmp += horas.charAt(0);
  tmp += horas.charAt(1);
  hours = parseInt(tmp);

  tmp = "";
  tmp += horas.charAt(3);
  tmp += horas.charAt(4);
  minutes = parseInt(tmp);

  tmp = "";
  tmp += horas.charAt(6);
  tmp += horas.charAt(7);
  seconds = parseInt(tmp);

  totalSeconds = seconds + (minutes*60) + (hours*3600);

  return totalSeconds;
}

