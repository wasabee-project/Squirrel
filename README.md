# Wasabee Skins

## Dependencies
You need to install nodes/npm and download/clone this repository

    npm install

## Configuration

Edit the following files:

 - `plugin.config.json`: only the name and url need to be changed, and maybe the version
 - `src/code/static.js`: to specify the css to load, custom strings, layer colors...
 - `src/code/css/`: prefer adding css inside this folder
 - `src/code/images/`: place to put images you use inside CSS
 - `src/code/strings/`: place to put language packs for the skin

## Build
    npx gulp

## Install

The skin is in `release/prod/SKIN-wasabee-skin.user.js`.

