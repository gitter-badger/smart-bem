module.exports = function (config) {
    config.nodes('bem/*.bundles/*', function (nodeConfig) {
	nodeConfig.addTechs([
	    [require('enb/techs/file-provider'), { target: '?.bemjson.js' }],
	    [require('enb/techs/files')],
	    [require('enb/techs/deps')],
	    [require('enb/techs/bemdecl-from-bemjson')],
	    [require('enb-bemxjst/techs/bemtree-old')],
	    [require('enb-diverse-js/techs/node-js'), { target: '?.pre.node.js' }],
	    [require('enb-modules/techs/prepend-modules'), { source: '?.pre.node.js', target: '?.node.js' }],
	    [require('enb-diverse-js/techs/browser-js'), { target: '?.pre.js' }],
	    [require('enb-modules/techs/prepend-modules'), { source: '?.pre.js', target: '?.js' }],
	    [require('enb-stylus/techs/css-stylus'), { target: '?.noprefix.css' }],
	    [require('enb-bh/techs/bh-server')],
	    [require('enb-bh/techs/html-from-bemjson')]
	]);

	nodeConfig.addTargets([
	    '?.css',
	    '?.bemtree.js',
	    '?.node.js',
	    '?.js',
	    '?.bh.js',
	    '?.html'
	]);
    });

    config.nodes('bem/*desktop.bundles/*', function (nodeConfig) {
	nodeConfig.addTechs([
	    [require('enb/techs/levels'), { levels: getDesktops(config) }],
	    [require('enb-autoprefixer/techs/css-autoprefixer'), {
		browserSupport: ['last 2 versions', 'ie 10', 'ff 24', 'opera 12.16'],
		sourceTarget: '?.noprefix.css'
	    }]
	]);
    });

    config.nodes('bem/tv-*.bundles/*', function (nodeConfig) {
	nodeConfig.addTechs([
	    [require('enb/techs/levels'), { levels: getTvs(config) }]
	]);
    });

    config.nodes('bem/*touch-phone.bundles/*', function (nodeConfig) {
	nodeConfig.addTechs([
	    [require('enb/techs/levels'), { levels: getTouchPhones(config) }],
	    [require('enb-autoprefixer/techs/css-autoprefixer'), {
		browserSupport: ['android 4', 'ios 6', 'ie 10'],
		sourceTarget: '?.noprefix.css'
	    }]
	]);
    });

};

function getDesktops(config) {
    var out = [
	{ path: 'libs/bem-core/common.blocks', check: false },
	{ path: 'libs/bem-core/desktop.blocks', check: false },
	{ path: 'libs/bem-components/common.blocks', check: false },
	{ path: 'libs/bem-components/desktop.blocks', check: false },
	'bem/common.blocks',
	'bem/desktop.blocks',
	    'libs/my-blocks'
    ].map(function (level) {
	return config.resolvePath(level);
    });
	console.log(out);
	return out;
}

function getTouchPhones(config) {
    return [
	{ path: 'libs/bem-core/common.blocks', check: false },
	{ path: 'libs/bem-core/touch.blocks', check: false },
	{ path: 'libs/bem-components/common.blocks', check: false },
	{ path: 'libs/bem-components/touch.blocks', check: false },
	'bem/common.blocks',
	'bem/touch.blocks',
	'bem/touch-phone.blocks'
    ].map(function (level) {
	return config.resolvePath(level);
    });
}

function getTvs(config) {
    return [
	{ path: 'libs/bem-core/common.blocks', check: false },
	{ path: 'libs/bem-core/desktop.blocks', check: false },
	{ path: 'libs/bem-components/common.blocks', check: false },
	{ path: 'libs/bem-components/desktop.blocks', check: false },
	'bem/common.blocks',
	'bem/tv.blocks',
	    'libs/my-blocks'
    ].map(function (level) {
	return config.resolvePath(level);
    });
}
