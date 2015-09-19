'use strict'

var todos = new Asteroid('localhost:3000')

chrome.runtime.onInstalled.addListener(function(info){
  console.log('on installed', arguments)
  console.log(info)

  console.log('We want to verify identity here')
  console.log(todos)
  // todos.loginWithPassword("sircharleswatson", "123456").then(function(data) {
  //   console.log(data);
  // });

})

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId)
})

chrome.runtime.onMessage.addListener(function(message) {

  console.log(message)

})
