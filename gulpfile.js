// Based on
// https://github.com/shakyShane/jekyll-gulp-sass-browser-sync/blob/master/gulpfile.js
var gulp = require('gulp');
var browserSync = require('browser-sync');
var cp = require('child_process');

// TODO Do we really need to support window?
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn(jekyll, ['build'], {
      stdio: 'inherit'
    })
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
  gulp.watch([
    '_scss/*.scss',
    '_layouts/*.html',
    '_includes/*.html',
    'en/**/*.md',
    'vi/**/*.md'
  ], [
    'jekyll-rebuild'
  ]);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
