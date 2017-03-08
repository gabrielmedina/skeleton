// gulpfile

var gulp       = require('gulp'),
    build      = require('gulp-build'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    useref     = require('gulp-useref'),
    imagemin   = require('gulp-imagemin');

gulp.task('default', ['watch']);
gulp.task('build', ['css', 'js', 'html', 'img']);

gulp.task('html', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src('app/assets/stylesheets/application.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/public/css'));
});

gulp.task('js', function() {
  return gulp.src('app/assets/javascripts/**/*.js')
    .pipe(concat('application.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/public/js'));
});

gulp.task('img', function() {
  return gulp.src('app/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/public/img'));
});

gulp.task('watch', function() {
  gulp.watch('app/assets/javascripts/**/*.js', ['js']);
  gulp.watch('app/assets/stylesheets/**/*.scss', ['css']);
  gulp.watch('app/*.html', ['html']);
});
