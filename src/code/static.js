// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

const skin = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.squirrel = skin;

skin.static = {
  // all CSS files listed here will be included
  // the property name does matter
  // if a name is also present if another enabled skin, the latest in the skin list will overide it
  // using 'main' will disable the default css
  CSS: {
    // main: require("./somefile.css"), // default skin is entirely disabled
    squirrel: require("./css/main.css")
  },

  // link style
  // linkStyle: {
  //   dashArray: [5, 5, 1, 5],
  //   assignedDashArray: [4, 2, 1],
  //   opacity: 1,
  //   weight: 2
  // },
  // blockers style
  // selfBlockStyle: {
  //   color: "#ff1111",
  //   dashArray: [1, 5],
  //   opacity: 4,
  //   weight: 3
  // },

  // define any languages added by this skin here
  // if the language name is the same as the skin name it will be activated when the skin is selected
  strings: {
     squirrel: require("./strings.json"),
  },

  // define the various colors here to override default colors
  // layerTypes: layerTypes = new Map([
  //   [
  //     "main",
  //     {
  //       name: "main",
  //       displayName: "Red",
  //       color: "#ff0000",
  //     },
  //   ],
  //   [
  //     "groupa",
  //     {
  //       name: "groupa",
  //       displayName: "Orange",
  //       color: "#ff6600",
  //     },
  //   ],
  //   [
  //     "groupb",
  //     {
  //       name: "groupb",
  //       displayName: "Light Orange",
  //       color: "#ff9900",
  //     },
  //   ],
  //   [
  //     "groupc",
  //     {
  //       name: "groupc",
  //       displayName: "Tan",
  //       color: "#bb9900",
  //     },
  //   ],
  //   [
  //     "groupd",
  //     {
  //       name: "groupd",
  //       displayName: "Purple",
  //       color: "#bb22cc",
  //     },
  //   ],
  //   [
  //     "groupe",
  //     {
  //       name: "groupe",
  //       displayName: "Teal",
  //       color: "#33cccc",
  //     },
  //   ],
  //   [
  //     "groupf",
  //     {
  //       name: "groupf",
  //       displayName: "Pink",
  //       color: "#ff55ff",
  //     },
  //   ],
  // ])
};
