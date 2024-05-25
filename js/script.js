// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: April 2024
// This file contains the JS functions for index.html


function myButtonClicked() {
  const age = parseInt(document.getElementById('age-entered').value)

  // Store the age in local storage
  localStorage.setItem('age', age)

  if (localStorage.age >= 17) {
    document.getElementById('answer').innerHTML = 'You can see an R rated movie alone.'
  } else if (localStorage.age >= 13) {
    document.getElementById('answer').innerHTML = 'You can see a PG-13 movie alone.'
  } else if (localStorage.age >= 9) {
    document.getElementById('answer').innerHTML = 'You can see a G or PG rated movie alone.'
  } else if (localStorage.age >= 6) {
    document.getElementById('answer').innerHTML = 'You can see a G rated movie alone.'
  }
}

// Retrieve the stored age from local storage on page load
window.addEventListener('load', () => {
  const storedAge = localStorage.getItem('age')

  // Set the input value with the stored age
  document.getElementById('age-entered').value = storedAge || ''
})
