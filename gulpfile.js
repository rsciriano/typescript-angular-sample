var gulp = require("gulp");
var gutil = require("gulp-util");
var tsc = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');


gulp.task("watch:ts", ["ts"], function () {
    gulp.watch(["app/**/*.ts"], ["ts"]);
});

gulp.task('ts', function() {
  var tsconfig = require("./tsconfig.json");
  var filesGLob = tsconfig.filesGlob;
  
  var tsResult = gulp.src(filesGLob)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsconfig));
        
  return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets'));

});