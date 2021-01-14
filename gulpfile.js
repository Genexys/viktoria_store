const postcss = require(`gulp-postcss`);
const gulp = require(`gulp`);
const cssnano = require(`cssnano`);
const sass = require(`gulp-sass`);
const cssDeclarationSorter = require(`css-declaration-sorter`);
const postcssCustomProperties = require(`postcss-custom-properties`);
const sourcemaps = require(`gulp-sourcemaps`);
const server = require(`browser-sync`).create();
const rename = require(`gulp-rename`);
const scss = require(`postcss-scss`);
const del = require(`del`);
const uglify = require(`gulp-uglify`);
const concat = require(`gulp-concat`);
const postHtml = require(`gulp-posthtml`);
const include = require(`posthtml-include`);
const webp = require(`gulp-webp`);
const imagemin = require(`gulp-imagemin`);
const svgstore = require(`gulp-svgstore`);
const webpackStream = require(`webpack-stream`);
const webpackConfig = require(`./webpack.config.js`);


gulp.task(`html`, function() {
  return gulp.src(`src/html/*.html`)
    .pipe(postHtml([
      include(),
    ]))
    .pipe(gulp.dest(`build`));
});

gulp.task(`css`, function() {
  const plugins1 = [
    postcssCustomProperties(),
    cssDeclarationSorter({order: `concentric-css`}),
  ];

  const plugins2 = [
    cssnano(),
  ];

  return gulp.src(`src/style/main.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(plugins1, {parser: scss}))
    .pipe(rename(`style.css`))
    .pipe(gulp.dest(`build/css`))
    .pipe(postcss(plugins2, {parser: scss}))
    .pipe(rename(`style.min.css`))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream());
});

gulp.task(`js`, function() {
  return gulp.src(`src/js/main.js`)
    .pipe(gulp.dest(`build/js`))
    .pipe(sourcemaps.init())
    .pipe(webpackStream(webpackConfig))
    // .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`build/js`));
});


gulp.task(`svgo`, function() {
  return gulp.src(`src/img/**/*.{svg}`)
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {removeRasterImages: true},
          {removeUselessStrokeAndFill: false},
        ],
      }),
    ]))
    .pipe(gulp.dest(`src/img`));
});

gulp.task(`imagemin`, function() {
  return gulp.src(`src/img/**/*.{png,jpg}`)
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
    ]))
    .pipe(gulp.dest(`src/img`));
});

gulp.task(`webp`, function() {
  return gulp.src(`src/img/**/*.{png,jpg}`)
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest(`src/img`));
});

gulp.task(`copypngjpg`, function() {
  return gulp.src(`src/img/**/*.{png,jpg,svg}`, {base: `src`})
    .pipe(gulp.dest(`build`));
});

gulp.task(`copysvg`, function() {
  return gulp.src(`src/img/**/*.svg`, {base: `src`})
    .pipe(gulp.dest(`build`));
});

gulp.task(`sprite`, function() {
  return gulp.src(`src/img/sprite/*.svg`)
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename(`sprite_auto.svg`))
    .pipe(gulp.dest(`build/img`));
});

gulp.task(`copy`, function() {
  return gulp.src([
    `src/fonts/**/*.{woff,woff2}`,
    `src/img/**`,
    `src/favicon/*.ico`,
  ], {
    base: `src`,
  })
    .pipe(gulp.dest(`build`));
});

gulp.task(`clean`, function() {
  return del(`build`);
});

gulp.task(`server`, function() {
  server.init({
    server: `build/`,
    notify: false,
    open: true,
    cors: true,
    ui: false,
    tunnel: true,
  });

  gulp.watch(`src/style/**/*.scss`, gulp.series(`css`));
  gulp.watch(`src/js/**/*.js`, gulp.series(`js`, `refresh`));
  gulp.watch(`src/img/**/*.svg`, gulp.series(`copysvg`, `sprite`, `html`, `refresh`));
  gulp.watch(`src/img/**/*.{png,jpg}`, gulp.series('copypngjpg', `refresh`));
  gulp.watch(`src/html/**/*.html`, gulp.series(`html`, `refresh`));
});


gulp.task(`refresh`, function(done) {
  server.reload();
  done();
});

gulp.task(`build`, gulp.series(`clean`, `svgo`, `copy`, `css`, `sprite`, `js`, `html`));

gulp.task(`start`, gulp.series(`build`, `server`));
