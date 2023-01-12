// content.js
// Author:
// Author URI: https://
// Author Github URI: https://www.github.com/
// Project Repository URI: https://github.com/
// Description: Handles all the webpage level activities (e.g. manipulating page data, etc.)
// License: MIT

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message’s structure.
  if (msg.subject === 'DOMInfo') {
    const location = window.location.href;
    const title = window.document.title;
    response({location, title});
  }});

