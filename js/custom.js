// vim:set et sw=2 ts=2 tw=80:
const banner =
  `
  ██╗  ██╗██╗██████╗ ███████╗    ███╗   ███╗███████╗██╗
  ██║  ██║██║██╔══██╗██╔════╝    ████╗ ████║██╔════╝██║
  ███████║██║██████╔╝█████╗      ██╔████╔██║█████╗  ██║
  ██╔══██║██║██╔══██╗██╔══╝      ██║╚██╔╝██║██╔══╝  ╚═╝
  ██║  ██║██║██║  ██║███████╗    ██║ ╚═╝ ██║███████╗██╗
  ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝╚═╝

Hi! You're awesome. I'm looking for you. There're a few
people who look into web console on the sites they visit.
Let's build great apps together!
`;

console.log(banner);


/*
 * Build the table of shotcuts
 */



/*
 * Show the list of shotcuts.
 */
let showShortcutsTable = function() {
  alertify.closeLogOnClick(true).error("Not done yet");
}

/*
 * Notice user about the shortcuts on this site.
 */
let timeout = 1000 * 5;
alertify
  .delay(timeout)
  .closeLogOnClick(true)
  .log(
    "This site has shortcuts. Press '?' or click to see."
  );
