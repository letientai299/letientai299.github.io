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

gulp.task('sass', () => {
  return gulp.src(SRC + '/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'})
      .on('error', sass.logError)
    )
    .pipe(gulp.dest(DEST + '/css'));
});

gulp.task('min', () => {
  gulp.src([
    SRC + '/images/**'
  ], {base: SRC})
    .pipe(debug())
    .pipe(imagemin())
    .pipe(gulp.dest(DEST))
});


gulp.task('sync', ['sass', 'min'], () => {
  gulp.src([
    SRC + '/**/*.md',
    SRC + '/**/*.html',
    SRC + '/**/*.xml'
  ], {base: SRC})
    .pipe(rename((path) => {
      underscorePrefixes.forEach((s) => {
        path.dirname= path.dirname.replace(s, '_' + s);
      });
    }))
    .pipe(gulp.dest(DEST));
});

gulp.task('watch', () => {
  gulp.watch("**/*.md", {base: SRC})
    .on('change', (e) => {
      gulp.src(e.path)
        .pipe(
          rename((path) => {
            underscorePrefixes.forEach((s) => {
              path.dirname = path.dirname.replace(s, '_' + s);
            });
          }))
        .pipe(gulp.dest(DEST));
    });
});

/*
 * Build the site and log all jekyll output to console.
 */
gulp.task('jekyll', () => {
  const jekyll = cp.spawn('jekyll', [
    'build',
    // '--watch',
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

gulp.task('build', ['sync', 'jekyll']);

/*
 * Start browserSync server and watch for changes in dest folder.
 */
gulp.task('serve', ['build'], () => {
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

gulp.task('default', ['clean', 'build']);

