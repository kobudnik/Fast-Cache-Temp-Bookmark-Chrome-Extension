// content.js
// Author:
// Author URI: https://
// Author Github URI: https://www.github.com/
// Project Repository URI: https://github.com/
// Description: Handles all the webpage level activities (e.g. manipulating page data, etc.)
// License: MIT

// document.addEventListener('DOMContentLoaded', () => {
//   const addButton = document.querySelector('.add-button');
//   addButton.addEventListener('click', () => {
//     console.log(document.location);
//   })
// })

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === 'report_back') {
      // Call the specified callback, passing
      // the web-page's DOM content as argument
      sendResponse('hello');//document.all[0].outerHTML);
  }
});
