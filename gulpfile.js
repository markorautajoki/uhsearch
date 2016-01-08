var gulp = require('gulp'),
    rename = require('gulp-rename'),
    traceur = require('gulp-traceur'),
    webserver = require('gulp-webserver'),
    nodemon = require('gulp-nodemon');
    browserSync = require('browser-sync'),
    proxyMiddleware = require('http-proxy-middleware');

// run init tasks
gulp.task('default', ['dependencies', 'js', 'html', 'css']);

// run development task
gulp.task('dev', ['watch', 'serve', 'nodemon']);

// serve the build dir
gulp.task('serve', function () {
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.css', ['css']);
});

// Static server
gulp.task('browser-sync', function() {
  var serverProxy = proxyMiddleware('/api', {target: 'http://localhost:3300'}),
      clientProxy = proxyMiddleware('/', {target: 'http://localhost:8000'});
  browserSync.init({
    startPath: "/",
    server: {
      baseDir: "./",
      middleware: [serverProxy, clientProxy]
    }
  });
});


// move dependencies into build dir
gulp.task('dependencies', function () {
  return gulp.src([
    'node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/systemjs/dist/system-csp-production.src.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/angular2/bundles/angular2.js'
  ])
    .pipe(gulp.dest('build/lib'));
});

// transpile & move js
gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(rename({
      extname: ''
    }))
    .pipe(
      traceur({
        modules: 'instantiate',
        moduleName: true,
        annotations: true,
        types: true,
        memberVariables: true
      }).on('error', function(err){
        console.log(err.message);
        console.log("in: " + err.fileName);
        this.emit("end")
      })
    )
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('build'));
});

// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});

// move css
gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
});

gulp.task('nodemon', function () {
  nodemon({
    script: 'server/server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
});
