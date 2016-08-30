'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');

gulp.task('start', function() {
  connect.server({
    root: './public',
    livereload: true
  });
});

gulp.task('sass', function() {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles'))
    .pipe(connect.reload());
});

gulp.task('sass:watch', function() {
  gulp.watch(['./src/styles/**/*.scss'], ['sass']);
});


gulp.task('default', ['sass', 'start', 'sass:watch']);
