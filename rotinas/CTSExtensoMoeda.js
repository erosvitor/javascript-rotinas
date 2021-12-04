
/*
 * ----------------------------------------------------------------------------------------------------
 * CTS Educare - Solutions for Trainings and Courses.
 * Copyright (c) 2018. All rights reserved.
 *
 * A classe CTSExtensoMoeda fornece recursos para converter um valor monetário por extenso.
 *
 * Por exemplo, o valor 1.500,00 é convertido para Um mil e quinhentos reais.
 *
 * Autor: Eros Vitor Bornatowski (erosborna@gmail.com)
 * ----------------------------------------------------------------------------------------------------
 */

var SINGULAR = 0;
var PLURAL = 1;
var unidades = [ "", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove",
      "dez", "onze", "doze", "treze", "quatorze", "quinze", "dessesseis", "dezessete", "dezoito", "dezenove" ];
var dezenas = [ "", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta",
      "oitenta", "noventa" ];
var centenas = [ "", "cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos",
      "setecentos", "oitocentos", "novecentos" ];
var milhares = new Array( [ "", "" ], [ "", "" ], [ "mil", "mil" ], [ "milhão", "milhões" ],
      [ "bilhão", "bilhões" ], [ "trilhão", "trilhões" ] );


function gerarExtensoMoeda(valor) {
  if (valor == null || valor.trim() === '') {
    return "valor inválido";
  }

  var posVirgula;
  var casasDecimais;
  var numeroTmp;
  var centenas = [];
  var inteiroPorExtenso = "";
  var decimalPorExtenso = "";

  // --------------------------------------------------------------------------------
  // Calcula o extenso da parte decimal, se houver.
  posVirgula = valor.indexOf('.');
  if (posVirgula > 0) {
    casasDecimais = valor.substring(posVirgula + 1);
    decimalPorExtenso = centenaPorExtenso(parseInt(casasDecimais));
    if (parseInt(casasDecimais) == 0)
      decimalPorExtenso = "";
    else if (parseInt(casasDecimais) == 1)
      decimalPorExtenso += " centavo";
    else
      decimalPorExtenso += " centavos";
    numeroTmp = valor.substring(0, posVirgula);
  } else
    numeroTmp = valor;

  // --------------------------------------------------------------------------------
  // Calcula o extenso da parte inteira.
  // Verifica quantas centenas cheias existem (Ex. O número 1500300 tem duas centenas cheias)
  var totalCentenasCheias = Math.trunc(numeroTmp.length / 3);

  // Verifica as posições para pegar a centena incompleta, se
  // houver (Ex. O número 1500300 tem como centena incompleta o 1)
  var posicaoInicial = 0;
  var posicaoFinal = numeroTmp.length - (totalCentenasCheias * 3);

  // Cria variável para guardar o índice das medidas...
  var indiceMilhar;

  // Verifica se existe centena incompleta...
  if (posicaoInicial != posicaoFinal) {
    // Havendo centena incompleta, pega ela e adiciona na lista de centenas...
    centenas.push(numeroTmp.substring(posicaoInicial, posicaoFinal));
    indiceMilhar = totalCentenasCheias + 1;
  } else
    indiceMilhar = totalCentenasCheias;

  // Pega as posições da primeira centena cheia...
  posicaoInicial += posicaoFinal;
  posicaoFinal += 3;

  // Adiciona a centena cheia na lista e busco as demais centenas, se houverem...
  for (var i = 1; i <= totalCentenasCheias; i++) {
    centenas.push(numeroTmp.substring(posicaoInicial, posicaoFinal));
    posicaoInicial += 3;
    posicaoFinal += 3;
  }

  // Calcula o extenso de cada centena...
  var indiceColuna;
  for (var i = 0; i < centenas.length; i++) {
    if (centenas[i] !== "000") {
      indiceColuna = (parseInt(centenas[i]) == 1 ? SINGULAR : PLURAL);
      inteiroPorExtenso += " " + centenaPorExtenso(parseInt(centenas[i])) + " " + milhares[indiceMilhar][indiceColuna];
    }
    indiceMilhar--;
  }

  if ((totalCentenasCheias == 0) && (centenas[0] === "1"))
    inteiroPorExtenso = inteiroPorExtenso.trim() + " real";
  else
    inteiroPorExtenso = inteiroPorExtenso.trim() + " reais";

  if (decimalPorExtenso === "")
    return inteiroPorExtenso;
  else
    return inteiroPorExtenso + " e " + decimalPorExtenso;
}


function centenaPorExtenso(numero) {
  var numeroString = numero.toString();

  if (numero < 20) {
    return unidades[numero];
  } else if (numero < 100) {
    var dezena = parseInt(numeroString.substring(0, 1));
    var unidade = parseInt(numeroString.substring(1, 2));
    return dezenas[dezena] + (unidade == 0 ? "" : " e " + unidades[unidade]);
  } else if (numero < 1000) {
    var centena = parseInt(numeroString.substring(0, 1));
    var dezena = parseInt(numeroString.substring(1, 2));
    var unidade = parseInt(numeroString.substring(2, 3));
    if ((centena == 1) && ((dezena > 0) || (unidade > 0))) {
      return "cento" + (dezena == 0 ? "" : " e " + dezenas[dezena]) + (unidade == 0 ? "" : " e " + unidades[unidade]);
    } else {
      return centenas[centena] + (dezena == 0 ? "" : " e " + dezenas[dezena]) + (unidade == 0 ? "" : " e " + unidades[unidade]);
    }
  } else {
    return "";
  }
}

