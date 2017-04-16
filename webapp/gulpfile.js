'use strict';

var path = require('path');
var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
var angularTemplateCache = require('gulp-angular-templatecache');
var angularFileSort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var eslint = require('gulp-eslint');
var gulpIf = require('gulp-if');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


// Lint JavaScript
gulp.task('lint', () =>
  gulp.src(['app/scripts/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpIf(!browserSync.active, eslint.failAfterError()))
);

// Compile and automatically prefix stylesheets
gulp.task('scss', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'app/app.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(sass({
      precision: 10
    }).on('error', sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    // Concatenate and minify styles
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(size({ title: 'scss' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
});

gulp.task('scss-libs', () =>
  gulp.src([
    'app/libs.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(sass({
      precision: 10
    }).on('error', sass.logError))
    // Concatenate and minify styles
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(size({ title: 'scss-libs' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
);

gulp.task('js', () =>
  gulp.src(['app/**/*.js'])
    .pipe(newer('dist'))
    .pipe(gulp.dest('dist'))
);

gulp.task('js-libs', () =>
  gulp.src([
    './node_modules/angular/angular.js',
    './node_modules/angular-route/angular-route.js',
    './node_modules/angular-translate/dist/angular-translate.js',
    './node_modules/angular-aria/angular-aria.js',
    './node_modules/angular-animate/angular-animate.js',
    './node_modules/angular-material/angular-material.js'
    // Other scripts
  ])
    .pipe(angularFileSort())
    .pipe(sourcemaps.init())
    .pipe(angularFileSort())
    .pipe(sourcemaps.write())
    .pipe(newer('dist/libs.min.js'))
    .pipe(concat('libs.min.js'))
    .pipe(uglify({ preserveComments: 'none' }))
    // Output files
    .pipe(size({ title: 'js-libs' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
);

gulp.task('inject-js', ['js', 'js-libs', 'template-cache'], () =>
  gulp.src('app/index.html')
    .pipe(inject(gulp.src(['dist/**/*.js', '!dist/libs.min.js', '!dist/app.templates.js'], { read: true }).pipe(angularFileSort()), { relative: false, ignorePath: 'dist/' }))
    .pipe(inject(gulp.src(['dist/app.templates.js'], { read: false }), { relative: false, ignorePath: 'dist/', starttag: '<!-- inject:templateCache:js -->' }))
    .pipe(inject(gulp.src(['dist/libs.min.js'], { read: false }), { relative: false, ignorePath: 'dist/', starttag: '<!-- inject:libs:js -->' }))
    .pipe(gulp.dest('dist'))
);

gulp.task('template-cache', () =>
  gulp.src([
    './app/components/**/*.html',
  ])
    .pipe(angularTemplateCache({
      module: 'gymTrackr.templates',
      filename: 'app.templates.js'
    }))
    .pipe(gulp.dest('dist'))
);


// Clean output directory
gulp.task('clean', () => del(['dist/*', '!dist/.git'], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['js', 'template-cache', 'inject-js', 'js-libs', 'scss', 'scss-libs'], () => {
  browserSync.init({
    notify: false,
    open: false,
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: './dist',
    port: 3000
  });

  gulp.watch(['app/components/**/*.html'], ['template-cache', browserSync.reload]);
  gulp.watch(['app/**/*.{scss,css}'], ['scss', () => browserSync.reload("dist/app.css")]);
  gulp.watch(['app/**/*.js'], ['js', browserSync.reload]);
  gulp.watch(['app/images/**/*'], browserSync.reload);
  gulp.watch(['app/index.html'], ['inject-js', browserSync.reload]);
});

gulp.task('default', ['serve']);
