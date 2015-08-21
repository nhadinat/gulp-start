var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('styles', function(){
	gulp.src('css/*.css')
		.pipe(concatCss('style.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['scripts', 'styles']);