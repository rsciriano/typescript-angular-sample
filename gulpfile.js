var gulp = require("gulp");
var gutil = require("gulp-util");
var ts = require("gulp-typescript");

gulp.task('ts', function() {
  var tsconfig = require("./tsconfig.json");
  var filesGlob = tsconfig.filesGlob;
  return gulp.src(filesGlob)
      .pipe(ts(tsconfig.compilerOptions))
      .pipe(gulp.dest('.'));
});