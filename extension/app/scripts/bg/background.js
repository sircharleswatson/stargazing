'use strict';

var todos = new Asteroid('localhost:3000');

chrome.runtime.onInstalled.addListener(function(info){
    console.log('on installed', arguments);
    // info.reason

    console.log("We want to verify identity here");
    console.log(todos);
    // todos.loginWithPassword("sircharleswatson", "123456").then(function(data) {
    //   console.log(data);
    // });

});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

  console.log(message);

})
