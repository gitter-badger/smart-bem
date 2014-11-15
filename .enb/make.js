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
    htmlFromBemjson: require('enb-bh/techs/html-from-bemjson')
};
var enbBemTechs = require('enb-bem-techs');
var libsLevels = [
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
            [techs.fileProvider, {target: '?.bemjson.js'}],
            [techs.files],
            [techs.deps],
            [techs.bemdeclFromBemjson],
            // [techs.bemtree],

            // js
            [techs.nodeJs, {target: '?.pre.node.js'}],
            [techs.prependYm, {source: '?.pre.node.js', target: '?.node.js'}],
            //[techs.browserJs, {target: '?.pre.js'}],
            //[techs.prependYm, {source: '?.pre.js', target: '?.js'}],

            // css
            [techs.cssStylus, {target: '?.noprefix.css'}],

            // bh
            [techs.bhServer],
            [techs.htmlFromBemjson],

            // client bh
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bh.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bh'
            }],
            [enbBemTechs.deps, {
                target: '?.bh.deps.js',
                bemdeclFile: '?.bh.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bh.deps.js',
                filesTarget: '?.bh.files',
                dirsTarget: '?.bh.dirs'
            }],
            [techs.bhYm, {
                target: '?.browser.bh.js',
                filesTarget: '?.bh.files',
                jsAttrName: 'data-bem',
                jsAttrScheme: 'json'
            }],

            // js
            [techs.browserJs],
            [techs.fileMerge, {
                target: '?.pre.js',
                sources: ['?.browser.bh.js', '?.browser.js']
            }],
            [techs.prependYm, {source: '?.pre.js'}],

            // borschik
            [techs.borschik, {sourceTarget: '?.js', destTarget: '_?.js',
                freeze: true, minify: isProd}],
            [techs.borschik, {sourceTarget: '?.css', destTarget: '_?.css', tech: 'cleancss',
                freeze: true, minify: isProd}]
        ]);

        nodeConfig.addTargets([
            '_?.css',
            //'?.bemtree.js',
            '?.node.js',
            '_?.js',
            '?.bh.js',
            '?.html'
        ]);
    });

    config.nodes('bem/*desktop.bundles/*', function (nodeConfig) {
        console.log(getDesktops(config));
        nodeConfig.addTechs([
            [require('enb/techs/levels'), {levels: getDesktops(config)}],
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                browserSupport: ['last 2 versions', 'ie 10', 'ff 24', 'opera 12.16'],
                sourceTarget: '?.noprefix.css'
            }]
        ]);
    });

    config.nodes('bem/tv-*.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), {levels: getTvs(config)}]
        ]);
    });

    config.nodes('bem/*touch-phone.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), {levels: getTouchPhones(config)}],
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                browserSupport: ['android 4', 'ios 6', 'ie 10'],
                sourceTarget: '?.noprefix.css'
            }]
        ]);
    });

};

function getDesktops(config) {
    return [].concat(libsLevels).concat([
        'bem/common.blocks',
        'bem/desktop.blocks'
    ]).map(function (level) {
        return config.resolvePath(level);
    });
}

function getTouchPhones(config) {
    return [].concat(libsLevels).concat([
        'bem/common.blocks',
        'bem/touch.blocks',
        'bem/touch-phone.blocks'
    ]).map(function (level) {
        return config.resolvePath(level);
    });
}

function getTvs(config) {
    return [].concat(libsLevels).concat([
        'bem/common.blocks',
        'bem/tv.blocks'
    ]).map(function (level) {
        return config.resolvePath(level);
    });
}
