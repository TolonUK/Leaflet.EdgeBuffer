var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var lint = require('gulp-eslint');

var paths = {
  scripts: ['src/**/*.js']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['dist']);
});

gulp.task('build', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('leaflet.edgebuffer.min.js'))
    .pipe(gulp.dest('dist'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['lint', 'build']);
});

gulp.task('lint', function() {
  return gulp.src(paths.scripts).pipe(lint())
  .pipe(lint.format())
  // Brick on failure to be super strict
  .pipe(lint.failOnError());
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'lint', 'build']);
