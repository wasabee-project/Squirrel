// do not touch this line
if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

// each skin needs its own namespace, change that here
window.plugin.wasabeeSkins.squirrel = {};

// this is a shortcut to save typing below
const skin = window.plugin.wasabeeSkins.squirrel;

skin.static = {
  // all CSS files listed here will be included
  // the property name does matter
  // using 'main' will disable the default css
  CSS: {
    squirrel: require("./css/main.css")
  },
};

// define any languages added by this skin here
// if the language name is the same as the skin name it will be activated when the skin is selected
skin.static.strings = {};
skin.static.strings.squirrel = require("./strings.json");

// define the various colors here
// https://leafletjs.com/reference-1.0.3.html#path
skin.static.layerTypes = new Map([
  // [
  //   "main",
  //   {
  //     name: "main",
  //     displayName: "Red",
  //     color: "#ff0000",
  //     link: {
  //       dashArray: [5, 5, 1, 5],
  //       assignedDashArray: [4, 2, 1],
  //       opacity: 1,
  //       weight: 2
  //     }
  //   }
  // ],
  // [
  //   "groupa",
  //   {
  //     name: "groupa",
  //     displayName: "Orange",
  //     color: "#ff6600",
  //     link: {
  //       dashArray: [5, 5, 1, 5],
  //       assignedDashArray: [4, 2, 1],
  //       opacity: 1,
  //       weight: 2
  //     }
  //   }
  // ],
  // [
  //   "groupb",
  //   {
  //     name: "groupb",
  //     displayName: "Light Orange",
  //     color: "#ff9900",
  //     link: {
  //       dashArray: [5, 5, 1, 5],
  //       assignedDashArray: [4, 1, 4, 1],
  //       opacity: 1,
  //       weight: 2
  //     }
  //   }
  // ],
  // [
  //   "groupc",
  //   {
  //     name: "groupc",
  //     displayName: "Tan",
  //     color: "#bb9900",
  //     link: {
  //       dashArray: [5, 5, 1, 5],
  //       assignedDashArray: [4, 2, 1],
  //       opacity: 1,
  //       weight: 2
  //     }
  //   }
  // ],
  // [
  //   "groupd",
  //   {
  //     name: "groupd",
  //     displayName: "Purple",
  //     color: "#bb22cc",
  //     link: {
  //       dashArray: [5, 5, 1, 5],
  //       assignedDashArray: [4, 2, 1],
  //       opacity: 1,
  //       weight: 2
  //     }
  //   }
  // ],
  // [
  //   "groupe",
  //   {
  //     name: "groupe",
  //     displayName: "Teal",
  //     color: "#33cccc",
  //     link: {
  //       dashArray: [5, 5, 1, 5],
  //       assignedDashArray: [4, 2, 1],
  //       opacity: 1,
  //       weight: 2
  //     }
  //   }
  // ],
  // [
  //   "groupf",
  //   {
  //     name: "groupf",
  //     displayName: "Pink",
  //     color: "#ff55ff",
  //     link: {
  //       dashArray: [5, 5, 1, 5],
  //       assignedDashArray: [4, 2, 1],
  //       opacity: 1,
  //       weight: 2
  //     }
  //   }
  // ],
  // [
  //   "self-block",
  //   {
  //     name: "self-block",
  //     displayName: "Self Block",
  //     color: "#ff1111",
  //     link: {
  //       dashArray: [1, 5, 1, 5],
  //       assignedDashArray: [4, 2, 1],
  //       opacity: 4,
  //       weight: 3
  //     }
  //   }
  // ]
]);
