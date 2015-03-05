// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint      = require('gulp-jshint');
var sass        = require('gulp-sass');
// var concat      = require('gulp-concat');
// var uglify      = require('gulp-uglify');
// var rename      = require('gulp-rename');
// var watch       = require('gulp-watch');
// var browserSync = require('browser-sync');

// Lint Task
gulp.task('lint', function() {
  return gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('/public/sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/stylesheets/'));
});

// Default Task
gulp.task('default', ['lint', 'sass');

gulp.task('sass',['sass']);
