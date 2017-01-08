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

  /*
   * Defensive check for lib loading OK, in case that some guys use NoScript.
   */
  if ([globals.Mousetrap, globals.alertify].some((lib) => lib == null)) {
    keyboardButton.addEventListener("click", () => {
      alert("Please enable JavaScript on 3rd domain to use this feature.");
    })
    return;
  }

  const nightmode = "nightmode";
  let keyboardButton =  document.getElementById("keyboard-icon");

  if(localStorage.getItem(nightmode) == "true"){
    document.body.classList.add("dark");
  }

  /*
   * Store the HTML table that will be displayed when user press '?'
   */
  let htmlTable = "";

  /*
   * Create a closure to add new keyboard shortcuts later.
   */
  let addShortcut = function(s) {
    /* Emphasize the mnemonic */
    let desc = s.description.replace(/&(\w)/,"<b>$1</b>");
    htmlTable+=`<tr><th style="text-align:right"><code>${s.key}</code></th><th>${desc}</th></tr>`;
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

  let clickIfExisted = function(selector) {
    let element = document.querySelector(selector)
    if(element != null) element.click();
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
      key: "g h",
      description: "Go to &Home",
      handler: goto("/")
    }, {
      key: "g a",
      description: "Go to &Archive",
      handler: goto("/archive/")
    }, {
      key: "g m",
      description: "Go to About (&me)",
      handler: goto("/about/")
    }, {
      key: "g t",
      description: "View &tags page",
      handler: goto("/tag/")
    }, {
      key: "[",
      description: "View previous post if existed",
      handler: () =>  { clickIfExisted("a.prev") }
    }, {
      key: "]",
      description: "View next post if existed",
      handler: () =>  { clickIfExisted("a.next") }
    }, {
      key: "g q",
      description: "Toggle night mode",
      handler: () => {
        let d = document.body;
        if(d.classList.contains("dark")) {
          d.classList.remove("dark");
          localStorage.setItem(nightmode, "false");
        } else {
          d.classList.add("dark");
          localStorage.setItem(nightmode, "true");
        }
      }
    }
  ]

  shortcuts.forEach(addShortcut);
  keyboardButton.addEventListener('click', showShortcutsTable);
})(this);

