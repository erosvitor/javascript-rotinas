
/*
 * ----------------------------------------------------------------------------------------------------
 * CTS Educare - Solutions for Trainings and Courses.
 * Copyright (c) 2018. All rights reserved.
 *
 * The CTSDate class provide resources to manipulate dates.
 *
 * Author: Eros Vitor Bornatowski (erosborna@gmail.com)
 * ----------------------------------------------------------------------------------------------------
 */
  
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

