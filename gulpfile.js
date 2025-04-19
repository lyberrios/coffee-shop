const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css(done) {
  src('src/scss/app.scss')        // Ruta al archivo SCSS principal
    .pipe(sass().on('error', sass.logError)) // Compilar SCSS
    .pipe(postcss([autoprefixer()]))         // Agrega autoprefixer
    .pipe(dest('build/css'));     // Guarda como app.css aquí
  done();
}

function dev() {
  watch('src/scss/**/*.scss', css); // Observa todos los .scss
}

exports.css = css;
exports.dev = dev;
exports.default = dev;
