'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const sass = require('gulp-sass');
const util = require('gulp-util');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');

const browserSync = require('browser-sync');
const cp = require('child_process');

const SRC = 'src';
const DEST = 'dest';


const sassFiles = [SRC + '/**/*.scss'];
let watchSass = () => {
  gulp.watch(sassFiles).on('change', () => {
    gulp.src(sassFiles)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(DEST + '/css'));
  });
};

gulp.task('sync', function() {
  watchSass();

  // gulp.src(SRC + "/**/*.md", { base: SRC })
    // .pipe(watch(SRC, { base: SRC }))
    // .pipe(gulp.dest(DEST));

  gulp.watch(SRC + "/**/*.md").on('change', function(event) {
    let fileSrc = event.path;
    // I don't like the underscore naming conventions in jekyll
    let fileDest = fileSrc.replace(SRC + "/", DEST+"/_");
    gulp.src(fileSrc).
      pipe(gulp.dest(fileDest));
  })
});

/*
 * Build the site and log all jekyll output to console.
 */
gulp.task('jekyll', function() {
  const jekyll = cp.spawn('jekyll', [
    'build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => util.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

/*
 * Minify assets
 */
gulp.task('min', function() {
  gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
});

/*
 * Start browserSync server and watch for changes in dest folder.
 */
gulp.task('serve', function() {
  const siteRoot = '_site';
  browserSync({
    files: [siteRoot + '/**'],
    browser: 'google-chrome',
    https: true,
    server: {
      baseDir: siteRoot
    }
  });

});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['sync']);
