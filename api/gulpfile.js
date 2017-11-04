var gulp = require('gulp');

gulp.task('copy', function () {
return gulp.src('./src/config/**/*.json')
  .pipe(gulp.dest('./lib/config'));
});