// Grab packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css');

// Create build css task
gulp.task('build-css', function() {

    gutil.log('Generate css files ...');

    gulp.src('Resources/Private/Assets/Styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('Resources/Public/Styles'))
        .pipe(rename('main.min.css'))
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/Styles'));

    gulp.src('Resources/Private/Assets/Styles/main-backend-half.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('Resources/Public/Styles'))
        .pipe(rename('main-backend-half.min.css'))
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/Styles'));

    gulp.src('Resources/Private/Assets/Styles/main-backend-full.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('Resources/Public/Styles'))
        .pipe(rename('main-backend-full.min.css'))
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/Styles'));

});

// Create build js task
gulp.task('build-js', function() {

    gutil.log('Generate js files ...');

    // Website js files
    gulp.src([
            'Resources/Private/Assets/JavaScript/**',
            '!' + 'Resources/Private/Assets/JavaScript/backend.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('Resources/Public/JavaScript'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/JavaScript'));

    // Backend js files
    gulp.src([
            'Resources/Private/Assets/JavaScript/backend.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('backend.js'))
        .pipe(gulp.dest('Resources/Public/JavaScript'))
        .pipe(rename('backend.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('Resources/Public/JavaScript'));

});

// Create default task
gulp.task('default', function() {

    gulp.src('Resources/Private/Assets/Styles/**/*.scss', {read: false})
        .pipe(watch('Resources/Private/Assets/Styles/**/*.scss', function() {
            gulp.start('build-css');
        }))
        .pipe(notify({
            'title': 'Neos Demo Website Package',
            'message': 'CSS files were generated'
        }));

    gulp.src('Resources/Private/Assets/JavaScript/**/*.js', {read: false})
        .pipe(watch('Resources/Private/Assets/JavaScript/**/*.js', function() {
            gulp.start('build-js');
        }))
        .pipe(notify({
            'title': 'Neos Demo Website Package',
            'message': 'JavaScript files were generated'
        }));

});