// vim:set et sw=2 ts=2 tw=60:
document.addEventListener("DOMContentLoaded", function(event) {
  let noJsBanner = document.getElementById("no-js-banner");
  if(noJsBanner != null) noJsBanner.remove()
});

const banner = `
██╗  ██╗██╗██████╗ ███████╗    ███╗   ███╗███████╗██╗
██║  ██║██║██╔══██╗██╔════╝    ████╗ ████║██╔════╝██║
███████║██║██████╔╝█████╗      ██╔████╔██║█████╗  ██║
██╔══██║██║██╔══██╗██╔══╝      ██║╚██╔╝██║██╔══╝  ╚═╝
██║  ██║██║██║  ██║███████╗    ██║ ╚═╝ ██║███████╗██╗
╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝╚═╝

Hi! You're awesome. There're a few people who look into
web console on the sites their visit. I'm looking you.
Let's build great apps together!
`;

console.log(banner);
