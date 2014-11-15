var gulp = require('gulp');
var bem = require('gulp-bem');
var bh = require('gulp-bh');
var concat = require('gulp-concat');
var del = require('del');
var debug = require('gulp-bem-debug');
var argv = require('yargs').alias('d', 'debug').boolean('d').argv;
var buildBranch = require('buildbranch');
var fs = require('fs');

var deps;

function getLevels() {

    var pages;

    pages = fs.readdirSync('./bem/');

    return pages
}

var levels = [
    './bem/common.blocks',
    './bem/desktop.blocks',
    './bem/tv-pc.blocks',
    './bem/desktop.bundles'
];

gulp.task('deps', function (done) {

    var tree = bem.objects(levels)
        .pipe(bem.deps())
        .pipe(bem.tree());

    deps = tree.deps('bem/desktop.bundles/index');

    if (argv.debug) { deps.pipe(debug()); }

    done();
});

gulp.task('css', ['deps', 'clean'], function () {
    return deps.src('{bem}.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', ['deps', 'clean'], function () {
    delete require.cache[require.resolve('./bem/desktop.bundles/index/index.bemjson.js')];
    return deps.src('{bem}.bh.js')
        .pipe(bh(require('./bem/desktop.bundles/index/index.bemjson.js'), 'index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['clean', 'html', 'css']);

gulp.task('clean', function (cb) {
    del(['./dist'], cb);
});

gulp.task('watch', ['build'], function() {
    return gulp.watch([
        '{blocks,pages}/**/*.css',
        '{blocks,pages}/**/*.deps.js',
        '{blocks,pages}/**/*.bh.js',
        '{blocks,pages}/**/*.bemjson.js'
    ], ['build']);
});

gulp.task('gh', ['build'], function(done) {
    buildBranch({ folder: 'dist', ignore: ['libs'] }, done);
});

gulp.task('default', ['watch']);