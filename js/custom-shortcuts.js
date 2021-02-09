// vim:set et sw=2 ts=2 tw=80:
(function(globals) {
  "use strict";

  let keyboardButton = document.getElementById("keyboard-icon");
  let lightbulbButton = document.getElementById("lightbulb-icon");

  /*
   * Defensive check for lib loading OK, in case that some guys use NoScript.
   */
  let libs = ["Mousetrap", "alertify"];
  let missing = libs.filter(x => globals[x] == null);
  if (missing.length !== 0) {
    let showAlertMissingJs = () =>
      alert(
        "Please enable JavaScript on 3rd domain to use this feature. " +
          "Following libraries are required: " +
          missing.join(",")
      );

    keyboardButton.addEventListener("click", showAlertMissingJs);
    lightbulbButton.addEventListener("click", showAlertMissingJs);
    return;
  }

  /*
   * Restore state
   */
  const isDark = "darkmode";
  if (localStorage.getItem(isDark) == "true") {
    document.body.classList.add("dark");
  }
  let toggleDarkMode = function() {
    let d = document.body;
    if (d.classList.contains("dark")) {
      d.classList.remove("dark");
      localStorage.setItem(isDark, "false");
    } else {
      d.classList.add("dark");
      localStorage.setItem(isDark, "true");
    }
  };

  /*
   * Store the HTML table that will be displayed when user press '?'
   */
  let htmlTable = "";

  /*
   * Create a closure to add new keyboard shortcuts later.
   */
  let addShortcut = function(s) {
    /* Emphasize the mnemonic */
    let desc = s.description.replace(/&(\w)/, "<b>$1</b>");
    htmlTable += `<tr><th style="text-align:right"><code>${s.key}</code></th><th>${desc}</th></tr>`;
    Mousetrap.bind(s.key, s.handler);
  };

  /*
   * Show the list of shortcuts.
   */
  let showShortcutsTable = function() {
    let completeTable = `<table><tbody>${htmlTable}</tbody></table>`;
    alertify.alert(completeTable);
  };

  /**
   * Factory method for goto some url.
   */
  let goto = function(where) {
    return () => {
      window.location.href = where;
    };
  };

  let clickIfExisted = function(selector) {
    let element = document.querySelector(selector);
    if (element != null) element.click();
  };

  /*
   * Define the keyboard mapping and descriptions.
   */
  const shortcuts = [
    {
      key: "?",
      description: "Show this shortcuts help dialog",
      handler: showShortcutsTable
    },
    {
      key: "g h",
      description: "Go to &Home",
      handler: goto("/")
    },
    {
      key: "g a",
      description: "Go to &Archive",
      handler: goto("/archive/")
    },
    {
      key: "g m",
      description: "Go to About (&me)",
      handler: goto("/about/")
    },
    {
      key: "g t",
      description: "View &tags page",
      handler: goto("/tag/")
    },
    {
      key: "[",
      description: "View previous post if existed",
      handler: () => {
        clickIfExisted("a.prev");
      }
    },
    {
      key: "]",
      description: "View next post if existed",
      handler: () => {
        clickIfExisted("a.next");
      }
    },
    {
      key: "g q",
      description: "Toggle night mode",
      handler: toggleDarkMode
    }
  ];

  shortcuts.forEach(addShortcut);

  keyboardButton.addEventListener("click", showShortcutsTable);
  lightbulbButton.addEventListener("click", toggleDarkMode);
})(this);
