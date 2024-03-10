//Create context menu
chrome.contextMenus.create({
  id: "1",
  title: "Ouvrir avec Google Maps",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  id: "2",
  title: "Ouvrir avec Mappy",
  contexts: ["selection"],
});

//listener for context menu
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "1") {
    baseURL = "https://www.google.fr/maps/dir/";
    var newURL = baseURL + info.selectionText;
    chrome.tabs.create({ url: newURL });
  } else if (info.menuItemId == "2") {
    baseURL = "https://fr.mappy.com/plan#/";
    var newURL = baseURL + info.selectionText;
    chrome.tabs.create({ url: newURL });
  }
});
