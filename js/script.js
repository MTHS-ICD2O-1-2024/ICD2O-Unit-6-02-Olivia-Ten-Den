// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 16, 2025
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
	// Retrieve firstInteger from localStorage
	let storedInteger = localStorage.getItem('firstInteger');

	// Get the integer-one input element
	const firstInteger = document.getElementById('integer-one');

	// Set the integer-one input value if storedValue exists in localStorage
	if (storedInteger) {
	  firstInteger.value = storedInteger;
	}

	// Retrieve secondInteger from localStorage
	storedInteger = localStorage.getItem('secondInteger');

	// Get the integer-one input element
	const secondInteger = document.getElementById('integer-two');

	// Set the integer-one input value if storedValue exists in localStorage
	if (storedInteger) {
	  secondInteger.value = storedInteger;
	}
}

function calculate() {
  let counter = 0
  let firstInteger = parseInt(document.getElementById("integer-one").value)
  localStorage.setItem('firstInteger', firstInteger)
  let answer = firstInteger
  let secondInteger = parseInt(document.getElementById("integer-two").value)
  localStorage.setItem('secondInteger', secondInteger)
  
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
