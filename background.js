// background.js
// Author:
// Author URI: https://
// Author Github URI: https://www.github.com/
// Project Repository URI: https://github.com/
// Description: Handles all the browser level activities (e.g. tab management, etc.)
// License: MIT
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  console.log(tabs[0].url);
});