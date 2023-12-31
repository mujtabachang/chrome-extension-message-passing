try {
  // This is the background script for the extension

  // A listener for when the user clicks on the extension button
  chrome.action.onClicked.addListener(buttonClicked);

  // Handle that click
  function buttonClicked(tab) {
    // Send a message to the active tab
    console.log("Chrome Extension Button clicked!");

    // Send a message to the tab that is open when button was clicked
    console.log("Sending message to Content Script");
    chrome.tabs.sendMessage(tab.id, { message: "browser action" });
  }

  // Listening for messages
  chrome.runtime.onMessage.addListener(receiver);

  function receiver(request, sender, sendResponse) {
    if (request.message === "thank you") {
      // Not doing anything for messages received but I could!
    }
  }
} catch (err) {
  console.log(err);
}
