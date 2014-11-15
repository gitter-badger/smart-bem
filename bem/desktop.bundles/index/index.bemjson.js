({
	block: 'page',
	title: 'Каталог фильмов, сериалов - Smart-TV framework',
	styles: [
		{ elem: 'css', url: 'index.css' },
		{ elem: 'css', url: 'http://fonts.googleapis.com/css?family=Open+Sans:400,700,300' }
	],
	scripts: [
		{ elem: 'js', url: 'index.js' }
	],
	mods: {
		theme: 'brew'
	},
	content: [
		{
			block: 'catalog',
			content: [
				{
					block: 'button',
					mods: { theme: 'islands', size: 's' },
					text: 'button'
				}
			]
		},
		{
			block: 'legend',
			content: 'legend'
		}
	]
});
