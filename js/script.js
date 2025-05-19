// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 15, 2025
// This file contains the JS functions for index.html

"use strict"

function clickCookie() {
  localStorage.hits = 1
  document.getElementById('result').innerHTML = "<p>Total Hits : " + localStorage.hits + ".</p>"
}

window.onload = function() {
  if( localStorage.hits ) {
    localStorage.hits = Number (localStorage.hits) + 1
    document.getElementById('result').innerHTML = "<p>Total Hits : " + localStorage.hits + ".</p>"
  }
  else {
    clickCookie()
  }
}
