

/**
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 **/


/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
 chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
      id: "cPlayerWinID",
      innerBounds: {
        width: 638,
        height: 636,
        minWidth: 638,
        minHeight: 636
      }
    });
  });


  document.addEventListener("DOMContentLoaded", event => {
    // we can move only if we are not in a browser's tab
    isBrowser = matchMedia("(display-mode: browser)").matches;
    if (!isBrowser) {
       //window.moveTo(16, 16);
       window.resizeTo(638, 636);
    }
 });