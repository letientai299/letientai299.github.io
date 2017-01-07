const gulp = require('gulp');
const browserSync = require('browser-sync');
const cp = require('child_process');
const imagemin = require('gulp-imagemin');

// TODO Do we really need to support window?
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

const messages = {
  jekyllBuild: 'Refreshing'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.exec('jekyll build limit_posts --incremental', {
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
    'js/*.*',
    '_config.yml',
    '*.html',
    '*.md',
    'pages/*',
    '_sass/*.scss',
    '_layouts/*.*',
    '_includes/*.*',
    'en/**/*.*',
    'vi/**/*.*'
  ], [
    'jekyll-rebuild'
  ]);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);



gulp.task('min', function() {
  gulp.src('./images_src/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
});
