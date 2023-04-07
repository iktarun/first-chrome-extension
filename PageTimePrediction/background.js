chrome.action.onClicked.addListener((tab) => {
  console.log("clicked");
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    })
    .then(() => console.log("script injected"))
    .catch((err) => console.error(err));
});
