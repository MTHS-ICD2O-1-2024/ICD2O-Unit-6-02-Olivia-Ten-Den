// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 15, 2025
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  if (localStorage.hits) {
    displayCount()
  }
  else {
    localStorage.setItem('hits', 0)
    displayCount()
  }
}

function clickCookie() {
  localStorage.hits = Number(localStorage.hits) + 1
  displayCount()
}

function displayCount() {
  document.getElementById('result').innerHTML = "<h5>Total Hits : " + localStorage.hits + "</h5>"
}
