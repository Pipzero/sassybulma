var gulp = require("gulp"),
      settings = require("./settings"),
      sass = require("gulp-sass"),  
      plumber = require("gulp-sass"),
      browserSync = require("browser-sync").create(),
      sourcemaps = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),
      path = require('path'),
      webpack = require("webpack"),
      sourcemaps = require('gulp-sourcemaps');
      
const
      themeLoc = settings.themeLocation
      sassLoc = themeLoc + 'sass/**/*.sass',
      phpLoc = themeLoc + '**/*.php',
      jsLoc = themeLoc + 'js/**/*.php',
      proxyUrl = settings.urlToPreview


gulp.task('sass', function () {
      return gulp
            .src(sassLoc)
            .pipe(sourcemaps.init())
            .pipe(sass().on("error", sass.logError))
            .pipe(autoprefixer({
                  overrideBrowserslist: ['last 2 versions'],
                  cascade: false
            }))
            .pipe(sourcemaps.write())
            .pipe(sass())
            .pipe(gulp.dest(themeLoc))
            .pipe(browserSync.stream());
});

gulp.task('php', function () {
      gulp.src(phpLoc)
            .pipe(plumber());
});

gulp.task('scripts', function (callback) {
      webpack(require("./webpack.config.js"), (err, stats) => {
            if (err) {
                  console.log(err.toString());
            }

            console.log(stats.toString());
            
            browserSync.reload();

            callback();
      });
});

gulp.task('watch-bs', function () {

      browserSync.init({
            notify: false,
            proxy: proxyUrl,
            port: 3000
      });

      gulp.watch(phpLoc).on('change', browserSync.reload);
      gulp.watch(sassLoc, gulp.series('sass'));
      gulp.watch([(themeLoc + 'js/scripts.js'), (themeLoc + 'js/modules/**/*.js')], gulp.series('scripts'));
});
