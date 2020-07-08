/* inject: header.js */

function wrapper(plugin_info) {
  /* inject: ./wrapper/pluginStart.js */

  // Code injection
  let setup = function() {
    /* inject: ../dist/static-bundle.js */

    // there really isn't anything to do here, but if you need startup logic for your skin, add it here
    if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};

  };

  /* inject: ./wrapper/pluginEnd.js */
}
/*   inject: ./wrapper/afterWrapper.js */
