// loading techs libraries
var techs = {
    // essential
    fileProvider: require('enb/techs/file-provider'),
    fileMerge: require('enb/techs/file-merge'),
    files: require('enb/techs/files'),

    deps: require('enb/techs/deps'),
    bemdeclFromBemjson: require('enb/techs/bemdecl-from-bemjson'),

    // optimization
    borschik: require('enb-borschik/techs/borschik'),

    // css
    cssStylus: require('enb-stylus/techs/css-stylus'),
    cssAutoprefixer: require('enb-autoprefixer/techs/css-autoprefixer'),

    // js
    nodeJs: require('enb-diverse-js/techs/node-js'),
    browserJs: require('enb-diverse-js/techs/browser-js'),
    prependYm: require('enb-modules/techs/prepend-modules'),

    // bemtree
    // bemtree: require('enb-bemxjst/techs/bemtree-old'),

    // bh
    bhServer: require('enb-bh/techs/bh-server'),
    bhYm: require('enb-bh/techs/bh-client-module'),

    // bemhtml
    bemhtml: require('enb-bemxjst/techs/bemhtml-old'),

    // html
    bhHtmlFromBemjson: require('enb-bh/techs/html-from-bemjson'),
    bemhtmlHtmlFromBemjson: require('enb-bemxjst/techs/html-from-bemjson')
};
var enbBemTechs = require('enb-bem-techs');
var libsLevels = [ // chech false means no need to rebuild blocks in library
    {path: 'libs/bem-core/common.blocks', check: false},
    {path: 'libs/bem-core/desktop.blocks', check: false},
    {path: 'libs/bem-components/common.blocks', check: false},
    {path: 'libs/bem-components/desktop.blocks', check: false},
    {path: 'libs/bem-components/design/common.blocks', check: false},
    {path: 'libs/bem-components/design/desktop.blocks', check: false}
];

module.exports = function (config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('bem/*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            // [enbBemTechs.levels, {levels: levels}],
            [techs.fileProvider, {target: '?.bemjson.js'}],
            [enbBemTechs.bemjsonToBemdecl],
            [enbBemTechs.deps],
            [enbBemTechs.files],
            // [techs.bemtree],

            // css
            [techs.cssStylus, {target: '?.noprefix.css'}],
            // + autoprefixer for different levels

            // js
            [techs.nodeJs, {target: '?.pre.node.js'}],
            [techs.prependYm, {source: '?.pre.node.js', target: '?.node.js'}],
            // [techs.browserJs, {target: '?.pre.js'}],
            // [techs.prependYm, {source: '?.pre.js', target: '?.js'}],

            // bh
            // [techs.bhServer],
            // [techs.bhHtmlFromBemjson],

            // bemhtml
            [techs.bemhtml, {devMode: process.env.BEMHTML_ENV === 'development'}],
            [techs.bemhtmlHtmlFromBemjson],

            // client bh
            // [enbBemTechs.depsByTechToBemdecl, {target: '?.bh.bemdecl.js', sourceTech: 'js', destTech: 'bh'}],
            // [enbBemTechs.deps, {target: '?.bh.deps.js', bemdeclFile: '?.bh.bemdecl.js'}],
            // [enbBemTechs.files, {depsFile: '?.bh.deps.js', filesTarget: '?.bh.files', dirsTarget: '?.bh.dirs'}],
            // [techs.bhYm, {target: '?.browser.bh.js',
            //     filesTarget: '?.bh.files', jsAttrName: 'data-bem', jsAttrScheme: 'json'}],

            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {target: '?.bemhtml.bemdecl.js', sourceTech: 'js', destTech: 'bemhtml'}],
            [enbBemTechs.deps, {target: '?.bemhtml.deps.js', bemdeclFile: '?.bemhtml.bemdecl.js'}],
            [enbBemTechs.files, {depsFile: '?.bemhtml.deps.js', filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'}],
            [techs.bemhtml, {target: '?.browser.bemhtml.js', filesTarget: '?.bemhtml.files',
                devMode: process.env.BEMHTML_ENV === 'development'}],

            // js
            [techs.browserJs],
            [techs.fileMerge, {target: '?.pre.js', sources: ['?.browser.bemhtml.js', '?.browser.js']}],
            // [techs.fileMerge, {target: '?.pre.js', sources: ['?.browser.bh.js', '?.browser.js']}],
            [techs.prependYm, {source: '?.pre.js'}],

            // borschik
            [techs.borschik, {sourceTarget: '?.js', destTarget: '_?.js', freeze: true, minify: isProd}],
            [techs.borschik, {sourceTarget: '?.css', destTarget: '_?.css', freeze: true, minify: isProd,
                tech: 'cleancss'}]
        ]);

        // targets to build for each bundle
        nodeConfig.addTargets([
            '_?.css',
            // '?.bemtree.js',
            '?.node.js',
            '_?.js',
            // '?.bh.js',
            '?.bemhtml.js',
            '?.html'
        ]);
    });

    // set levels for each bundle set
    // additional techs for specified bundles

    // add techs for desktop
    config.nodes('bem/*desktop.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), {levels: getDesktops(config)}],
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                browserSupport: ['last 2 versions', 'ie 10', 'ff 24', 'opera 12.16'],
                sourceTarget: '?.noprefix.css'
            }]
        ]);
    });

    // -//- for touch platforms
    config.nodes('bem/*touch-phone.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), {levels: getTouchPhones(config)}],
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                browserSupport: ['android 4', 'ios 6', 'ie 10'],
                sourceTarget: '?.noprefix.css'
            }]
        ]);
    });

    // -//- for tvs
    config.nodes('bem/tv-*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), {levels: getTvs(config)}]
        ]);
    });
};

function getDesktops(config) {
    return [].concat(libsLevels).concat([
        'bem/common.blocks',
        'bem/desktop.blocks',
        'libs/my-blocks'
    ]).map(function (level) {
        return config.resolvePath(level);
    });
}

function getTouchPhones(config) {
    return [].concat(libsLevels).concat([
        'bem/common.blocks',
        'bem/touch.blocks',
        'bem/touch-phone.blocks',
        'libs/my-blocks'
    ]).map(function (level) {
        return config.resolvePath(level);
    });
}

function getTvs(config) {
    return [].concat(libsLevels).concat([
        'bem/common.blocks',
        'bem/tv.blocks',
        'libs/my-blocks'
    ]).map(function (level) {
        return config.resolvePath(level);
    });
}
