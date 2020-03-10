const gulp = require('gulp');
      browserSync = require('browser-sync');
      sass = require('gulp-sass');
      vueComponent = require('gulp-vue-single-file-component');
      babel = require('gulp-babel');
      rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('code', () => {
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', () => gulp.src('app/js/*.js')
  .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
  .pipe(gulp.dest('./public/js'))
  .pipe(browserSync.stream())
);

gulp.task('vue', () => gulp.src('app/js/components/*.vue')
  .pipe(vueComponent({ debug: true, loadCssMethod: 'loadCss' }))
  .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
  .pipe(rename({ extname: '.js' }))
  .pipe(gulp.dest('./public/js/components'))
  .pipe(browserSync.stream())
);

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('watch', () => {
  gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
  gulp.watch('app/*.html', gulp.parallel('code'));
  gulp.watch('./js/*.js', gulp.parallel('scripts'));
  gulp.watch('./js/components/*.vue', gulp.parallel('vue'));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'vue', 'browser-sync', 'watch'));