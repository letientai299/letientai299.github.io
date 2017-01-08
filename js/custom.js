// vim:set et sw=2 ts=2 tw=80:
/*
 * THIS FILE IS LEAVE UNCOMPRESSED FOR YOUR REVIEWING, SIR :).
 *
 * Just kidding, currently I have no idea how to minify js on Github Pages.
 */
(function(globals) {

  "use strict";
  // banner {{{1 //
  console.log(
    `
  ██╗  ██╗██╗██████╗ ███████╗    ███╗   ███╗███████╗██╗
  ██║  ██║██║██╔══██╗██╔════╝    ████╗ ████║██╔════╝██║
  ███████║██║██████╔╝█████╗      ██╔████╔██║█████╗  ██║
  ██╔══██║██║██╔══██╗██╔══╝      ██║╚██╔╝██║██╔══╝  ╚═╝
  ██║  ██║██║██║  ██║███████╗    ██║ ╚═╝ ██║███████╗██╗
  ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝╚═╝

Hi! You're awesome. I'm looking for you. There're a few
people who look into web console on the sites they visit.

Let's build great apps together!`
  );
  // 1}}} //

  let keyboardButton = document.getElementById("keyboard-icon");

  /*
   * Defensive check for lib loading OK, in case that some guys use NoScript.
   */
  if ([globals.Mousetrap, globals.alertify].some((lib) => lib == null)) {
    keyboardButton.addEventListener("click", () => {
      alert("Please enable JavaScript on 3rd domain to use this feature.");
    })
    return;
  }

  /*
   * Show the list of shotcuts.
   */
  let showShortcutsTable = function() {
    alertify.closeLogOnClick(true)
      .alert("This is not done yet. Stay tuned.");
  }

  /*
   * Define the keyboard mapping and descriptions.
   */
  const shortcuts = {
    "shift+/": {
      text: "Show shortcuts help dialog",
      handler: showShortcutsTable
    }
  }

  for (let key in shortcuts) {
    let handleObject = shortcuts[key];
    Mousetrap.bind(key, handleObject.handler);
  }

  keyboardButton.addEventListener('click', showShortcutsTable);
})(this);
