// content.js
// Author: Kennen Budnik, Stephen Lee
// Author Github URI: https://github.com/stphnl
// Project Repository URI: https://github.com/stphnl/QuickMarks
// Description: Fetch background window's Title and URL
// License: MIT

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message’s structure.
  if (msg.subject === 'DOMInfo') {
    const location = window.location.href;
    const title = window.document.title;
    response({location, title});
  }});

