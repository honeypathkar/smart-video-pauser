chrome.runtime.onInstalled.addListener(() => {
  console.log("Smart Video Pauser Extension Installed");
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log("Tab switched:", activeInfo);
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    console.log("Tab updated:", tabId, changeInfo, tab);
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"],
    });
  }
});
