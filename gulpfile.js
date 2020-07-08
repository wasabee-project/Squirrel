const fs = require("fs");
const path = require("path");
const gulp = require("gulp");
const injectfile = require("gulp-inject-file");
const rename = require("gulp-rename");
const contents = require("gulp-inject-string");
const cfg = require("./plugin.config.json");
const trimlines = require("gulp-trimlines");
const del = require("del");
const webpack = require("webpack");
const log = require("fancy-log");

const ensureDirectoryExistence = filePath => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};

// Config
const status = {
  headers: null,
};

gulp.task("clear", cb => {
  status.headers = null;
  cb();
});

// build tasks
gulp.task("buildheaders", cb => {
  cfg.pluginName = cfg.pluginName.replace("__SKIN_NAME__", cfg.name);
  cfg.metaName = cfg.metaName.replace("__SKIN_NAME__", cfg.name);
  for (const v of Object.keys(cfg.headers.common)) {
    cfg.headers.common[v] = cfg.headers.common[v].replace("__SKIN_NAME__", cfg.name);
    cfg.headers.common[v] = cfg.headers.common[v].replace("__URL__", cfg.url);
  }

  let content = fs.readFileSync(cfg.src.meta, "utf8");
  const commonHeaders = cfg.headers.common;

  let newContent = "";
  for (const l of content.split("\n")) {
    let newline = l;
    for (const k of Object.keys(cfg.headers.common)) {
      if (l.indexOf(`@${k} `) == 3) {
        newline = `// @${k} 	 ${cfg.headers.common[k]}`;
	break;
      } 
    }
    newContent += newline + "\n";
  }

  status.headers = newContent;
  cb();
});

gulp.task("webpack", callback => {
  const webpackConfig = require("./webpack.config.js");
  webpack(webpackConfig, function(err, stats) {
    log(
      "[webpack]",
      stats.toString({
        // output options
      })
    );

    if (err) {
      throw new PluginError("webpack", err);
    }

    callback();
  });
});

gulp.task("buildplugin", cb => {
  const destination = cfg.releaseFolder["prod"];

  gulp
    .src(cfg.src.plugin)
    // prepend headers
    .pipe(contents.prepend(status.headers))
    // contents.prepend(status.headers)
    // inject files
    .pipe(
      injectfile({
        pattern: "\\/\\*+\\s*inject:\\s*<filename>\\s*\\*+\\/"
      })
    )
    // trim leading spaces
    .pipe(trimlines({ leading: false }))
    // rename and save
    .pipe(rename(cfg.pluginName))
    .pipe(gulp.dest(destination));
  cb();
});

gulp.task("buildmeta", cb => {
  const path = cfg.releaseFolder["prod"] + cfg.metaName;

  ensureDirectoryExistence(path);
  fs.writeFile(path, status.headers, err => {
    cb(err);
  });
});

gulp.task(
  "build",
  gulp.series([
    "buildheaders",
    "buildmeta",
    "webpack",
    "buildplugin",
    "clear"
  ])
);

gulp.task("default", gulp.series(["build"]));
gulp.task("clean", () => del(["releases/*", "dist/*", "dist"]));
