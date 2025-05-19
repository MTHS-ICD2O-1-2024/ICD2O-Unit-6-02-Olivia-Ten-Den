// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 9, 2025
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  let counter = 0
  let firstInteger = parseInt(document.getElementById("integer-one").value)
  let answer = firstInteger
  let secondInteger = parseInt(document.getElementById("integer-two").value)

  while (true) {
    if (answer < secondInteger) {
      break
    }
    else {
      answer = answer - secondInteger
      counter = counter + 1
    }
  }
  document.getElementById('result').innerHTML = "<p>The quotient is " + counter + ", remainder " + answer + ".</p>"
}
