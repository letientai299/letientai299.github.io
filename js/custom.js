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
   * Store the HTML table that will be displayed when user press '?'
   */
  let htmlTable = "";

  /*
   * Create a closure to add new keyboard shortcuts later.
   */
  let addShortcut = function(s) {
    htmlTable+=`<tr><th style="text-align:right"><code>${s.key}</code></th><th>${s.description}</th></tr>`;
    Mousetrap.bind(s.key, s.handler);
  }

  /*
   * Show the list of shortcuts.
   */
  let showShortcutsTable = function() {
    let completeTable = `<table><tbody>${htmlTable}</tbody></table>`
    alertify.alert(completeTable);
  }

  /**
   * Factory method for goto some url.
   */
  let goto = function(where) {
    return () => {
      window.location.href = where;
    }
  }

  /*
   * Define the keyboard mapping and descriptions.
   */
  const shortcuts = [
    {
      key: "?",
      description: "Show this shortcuts help dialog",
      handler: showShortcutsTable
    }, {
      key: "g+h",
      description: "Go to Home",
      handler: goto("/")
    }, {
      key: "g+e",
      description: "Show English posts",
      handler: goto("/en/")
    }, {
      key: "g+v",
      description: "Show Vietnamese posts",
      handler: goto("/vi")
    }, {
      key: "g+a",
      description: "Go to Archive",
      handler: goto("/archive/")
    }, {
      key: "g+m",
      description: "Go to About",
      handler: goto("/about/")
    }, {
      key: "g+t",
      description: "View tags",
      handler: goto("/tag/")
    }
  ]

  shortcuts.forEach(addShortcut);
  keyboardButton.addEventListener('click', showShortcutsTable);
})(this);
