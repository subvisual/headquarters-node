var gulp = require('gulp');
var babel = require("gulp-babel");
var mocha = require('gulp-mocha');
var debug = require('gulp-debug');

libSrc = ['lib/**.js', 'lib/*/**.js', 'lib/*/*/**.js'];
testSrc = ['test/*.js', 'test/*/**.js'];

gulp.task('default', ['scripts', 'watch']);

gulp.task('scripts', function() {
  return gulp.src(libSrc)
    .pipe(debug({title: 'scripts:'}))
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['scripts'], function() {
  return gulp.src(testSrc)
    .pipe(mocha({ reporter: 'list' }));
});

gulp.task('watch', function() {
  gulp.watch(libSrc, ['default']);
});
