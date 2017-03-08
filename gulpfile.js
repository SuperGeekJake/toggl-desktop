const del = require('del')
const run = require('run-sequence')
const gulp = require('gulp')
const tsc = require('gulp-typescript')
const sourcemaps = require('gulp-sourcemaps')

const DIR_OUT = 'out'
const DIR_OUT_BUILD = 'out-build'
const SRC_TS = 'src/**/*.@(ts|tsx)'
const SRC_HTML = 'src/index.html'

gulp.task('compile-scripts', () => {
  const tsProject = tsc.createProject('src/tsconfig.json')
  return gulp.src(SRC_TS)
    .pipe(sourcemaps.init())
    .pipe(tsProject()).js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIR_OUT))
})

gulp.task('compile-template', () => {
  return gulp.src(SRC_HTML)
    .pipe(gulp.dest(DIR_OUT))
})

// Fast compile for development time
gulp.task('clean', () => del([DIR_OUT]))
gulp.task('compile', ['clean'], (cb) => run(['compile-scripts', 'compile-template'], cb))
gulp.task('watch', () => {
  gulp.watch(SRC_TS, ['compile-scripts'])
  gulp.watch(SRC_HTML, ['compile-template'])
})

// Full compile, including nls and inline sources in sourcemaps, for build
// gulp.task('clean-build', () => del([DIR_OUT_BUILD]))
// gulp.task('compile-build', ['clean-build'], compileTask)
// gulp.task('watch-build', ['clean-build'], watchTask)

// Default
gulp.task('default', ['compile'])
