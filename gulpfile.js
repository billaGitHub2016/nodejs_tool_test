/**
 *
 * Created by phb on 17/5/13.
 */
var gulp = require('gulp');

gulp.task('copy', function(){
    console.log('first begin');
    gulp.src(['src/*'])
        .pipe(gulp.dest('dist/'));

    console.log('first end');
});

gulp.task('watchCopy', function(){
   gulp.watch(['src/*','src/css/*'], ['copy']);
});

var  browserSync = require('browser-sync');
    // 静态服务器
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});

