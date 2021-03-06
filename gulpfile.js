const gulp = require('gulp');
const browserSync = require('browser-sync');
const cp = require('child_process');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const extname = require('gulp-extname');
const header = require('gulp-header');

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function(done) {
  browserSync.notify("Refreshing");
  return cp.exec('jekyll build --incremental', {
    stdio: 'inherit'
  })
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload()
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
    'css/*.*',
    '_config.yml',
    '*.html',
    '*.md',
    'pages/*',
    '_sass/*.scss',
    '_layouts/*.*',
    '_includes/*.*',
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

gulp.task('min', function() {
  gulp.src('assets/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images'))

  gulp.src('js/*.js')
    .pipe(babel({
      presets: ['babili'],
      comments: false
    }))
    .pipe(extname(".min.js"))
    .pipe(header('// Hi reviewer, please see original source here:\n// https://git.io/vMEw2\n'))
    .pipe(gulp.dest('dist/'));
});
