({
	block: 'page',
	title: 'Каталог фильмов, сериалов - Smart-TV framework',
	styles: [
		//{ elem: 'css', url: 'http://yastatic.net/bootstrap/3.1.1/css/bootstrap.min.css' },
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
            block: 'page',
            title: 'Hello, World!',
            styles: [
                { elem: 'css', url: 'index.css' }
            ],
            scripts: [
                { elem: 'js', url: 'index.js' }
            ],
            content: [
                'Hello, World!',
                { block: 'scene-manager' }
            ]
        },
		{
			block: 'legend',
			content: 'legend'
		}
	]
})
