const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css() {
  return src('src/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'));
}

function dev() {
  watch('src/scss/**/*.scss', css);
}

// Exporta la tarea css para que pueda ser utilizada desde la línea de comandos
// y la tarea dev para el modo de desarrollo
exports.build = series(css); // Compila solo una vez y termina

exports.css = css;
exports.dev = dev;
exports.default = dev;
