"use strict"

var remote = new Asteroid("localhost:3000")

chrome.runtime.onInstalled.addListener(function(info){
  console.log("on installed", arguments)
  console.log(info)

  console.log(remote._events)
  if (loggedIn()) {
    console.log("User is logged in")
  }

  console.log(remote)
  console.log(remote.loggedIn)

})

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId)
})

chrome.runtime.onMessage.addListener(function(message) {

  console.log(message)

  if (message.type === "login") {
    remote.loginWithPassword(message.email, message.password).then(function(data) {
      console.log("UserID:", data)
    })
  }

})

function loggedIn() {
  console.log(remote.loggedIn)
  if (!remote.loggedIn) {
    return false
  }

  return true
}
