'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat');

gulp.task('do-it', function () {
    gulp.src('src/*.js').pipe(babel({ presets: ['env'] })).pipe(uglify()).pipe(concat('all.js')).pipe(gulp.dest('dist'));
});
//# sourceMappingURL=gulpfile.js.map