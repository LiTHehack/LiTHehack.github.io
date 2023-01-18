// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
  console.log("Loaded")
  chrome.tabs.getSelected(null,function(tab){
    console.log(tab)
    chrome.extension.getBackgroundPage().sendFinished(tab, function(){
      $('.finished').toggle()
      $('.loading').toggle()
    });
  })
})
