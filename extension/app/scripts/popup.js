// 'use strict';

// console.log('\'Allo \'Allo! Popup');

$(document).ready(function() {

})

$('#login-form').on('submit', function(event) {
  console.log(event)

  var email = event.target['0'].value
  var password = event.target['1'].value

  console.log(email, password)
  console.log('sending message to background')
  chrome.runtime.sendMessage({
    type: 'login',
    email: email,
    password: password
  })
  event.preventDefault()
})

