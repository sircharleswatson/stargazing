var checkReadyState = setInterval(function() {

  if (!ready()) {
    return
  }

  clearInterval(checkReadyState)

  if (ignoringPage()) {
    return
  }

  chrome.runtime.sendMessage("test message")

}, 10)


function ready() {
  if (document.readyState === "complete") {
    return true
  }

  return false
}

function ignoringPage() {
  var pageUrl = window.location.protocol + "//" + window.location.host
  var ignore = [
    // /localhost/ig,
    /meteor-showers\.meteor\.com/ig,
    /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/ig
  ]

  for(var i=0; i<ignore.length; i++){
    if(ignore[i].exec(pageUrl)){
      console.log("ignoring", pageUrl)
      return true
    }
  }

  return false
}


// var readyStateCheckInterval = setInterval(function() {
//     if (document.readyState === "complete") {
//         clearInterval(readyStateCheckInterval);

//         var installationTag = document.createElement('div');
//         installationTag.setAttribute('class','meteor-hunters-is-installed');
//         installationTag.setAttribute('style','display:none;');
//         document.body.appendChild(installationTag);


//         var pageUrl = window.location.protocol + "//" + window.location.host;
//         var ignore = [
//             /localhost/ig,
//             /spotting\.meteor\.com/ig,
//             /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/ig
//         ];

//         for(var i=0; i<ignore.length; i++){
//             if(ignore[i].exec(pageUrl)){
//                 console.log('ignoring',pageUrl);
//                 return;
//             }
//         }


//         //scripts
//         var scripts = document.querySelectorAll("head > script") || [];
//         var reportData = [];

//         for(var i=0; i<scripts.length; i++){
//             if(scripts[i].innerHTML){
//                 reportData.push({
//                     content : scripts[i].innerHTML
//                 });
//             }
//         }

//         chrome.runtime.sendMessage({
//             from: pageUrl,
//             meta: {
//                 title: (document.querySelector("head > title") || {}).innerHTML
//             },
//             report: reportData
//         }, function(response){

//             if(!response.newSpotting){
//                 return;
//             }

//             var overlayDiv = document.createElement('div');
//             var meteorDiv = document.createElement('div');


//             meteorDiv.setAttribute('class', 'meteorite shoot-meteor');
//             meteorDiv.style['background-image'] = 'url(' + chrome.extension.getURL("icons/meteorite.png") + ')';
//             overlayDiv.setAttribute('class','meteor-overlay animated fadeIn-n-Out');
//             overlayDiv.style['background-image'] = 'url(' + chrome.extension.getURL("icons/background.jpg") + ')';
//             overlayDiv.addEventListener('click', function(){
//                 document.body.removeChild(overlayDiv);
//                 document.body.removeChild(claimLink);
//             });

//             overlayDiv.appendChild(meteorDiv);

//             var claimLink = document.createElement('a');
//             claimLink.setAttribute('target','_blank');
//             claimLink.setAttribute('class', 'growl wait-n-fadeIn');
//             if(response.needsClaim){
//                 claimLink.style['background-image'] = 'url(' + chrome.extension.getURL("icons/claim.png") + ')';
//                 claimLink.setAttribute('href',response.claimUrl);
//             }
//             else {
//                 claimLink.style['background-image'] = 'url(' + chrome.extension.getURL("icons/unknown.png") + ')';
//                 claimLink.setAttribute('href',response.siteUrl);
//             }

//             document.body.appendChild(overlayDiv);
//             document.body.appendChild(claimLink);
//         });
//     }
// }, 10);
