const gulp = require('gulp');
      browserSync = require('browser-sync');
      sass = require('gulp-sass');
      babel = require('gulp-babel');
      rename = require('gulp-rename');
      vueComponent = require('gulp-vue-single-file-component');
      uglify = require('gulp-uglify');
      myth = require('gulp-myth');
      csso = require('gulp-csso');
      runSequence = require('gulp4-run-sequence');

var concat = require('gulp-concat');

gulp.task('code', () => {
  return gulp.src('public/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', () => gulp.src('app/js/*.js')
  .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
  .pipe(gulp.dest('public/js'))
  .pipe(browserSync.stream())
);

gulp.task('vue', () => gulp.src('app/js/components/*.vue')
  .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
  .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
  .pipe(rename({ extname: '.js' }))
  .pipe(gulp.dest('public/js/components'))
  .pipe(browserSync.stream())
);

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
});

gulp.task('watch', () => {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
  gulp.watch('public/*.html', gulp.parallel('code'));
  gulp.watch('app/js/*.js', gulp.parallel('scripts'));
  gulp.watch('app/js/components/*.vue', gulp.parallel('vue'));
});

gulp.task('build', () => {

  gulp.src(['public/*.html'])
    .pipe(gulp.dest('dist/'));

  gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(myth())
    .pipe(csso())
    .pipe(gulp.dest('dist/css/'));

  gulp.src(['public/js/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js/'));

  gulp.src(['public/js/components/*.js'])
    .pipe(gulp.dest('dist/js/components/'));

});

gulp.task('default', gulp.parallel( 'scripts', 'vue', 'sass', 'browser-sync', 'watch'));
