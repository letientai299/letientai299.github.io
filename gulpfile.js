'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const sass = require('gulp-sass');
const util = require('gulp-util');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');

const browserSync = require('browser-sync');
const cp = require('child_process');

const SRC = 'src';
const DEST = 'dest';

gulp.task('clean', () => {
  require('del')(DEST + "/*");
});

// I don't like the underscore naming conventions in jekyll, hard to type.
const underscorePrefixes = [
  "posts",
  "includes",
  "layouts"
];


gulp.task('sync', () => {
  gulp.src([
    '**/*.md',
    '**/*.html',
    '**/*.xml'
  ], {base: SRC})
    .pipe(rename((path) => {
      underscorePrefixes.forEach((s) => {
        path.dirname= path.dirname.replace(s, '_' + s);
      });
    }))
    .pipe(gulp.dest(DEST));
});

gulp.task('watch', () => {
  gulp.watch(SCR + "/**/*.md").on('change', (e) => {
    // TODO convert and
  });
});

/*
 * Build the site and log all jekyll output to console.
 */
gulp.task('jekyll', () => {
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
gulp.task('min', () => {
  gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
});

/*
 * Start browserSync server and watch for changes in dest folder.
 */
gulp.task('serve', () => {
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

gulp.task('default', ['sync']);

