var callbacks = []

function injectedMethod (tab, method){
  console.log("injectedMethod")
  chrome.tabs.executeScript(tab.id, {file: 'jquery.min.js' }, function() {
    console.log("jquery")
    chrome.tabs.executeScript(tab.id, { file: 'getContent.js' }, function() {
      console.log("getContent")
    })
  })
}

function sendFinished(tab, callback) {
  callbacks.push(callback)
  injectedMethod(tab, 'getPageInfo')
}

chrome.extension.onMessage.addListener(function (response){
  var cb = callbacks.shift();
  cb()
})
