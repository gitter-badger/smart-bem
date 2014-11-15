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
	content: [
		{
			block: 'catalog',
			content: 'catalog'
		},
		{
			block: 'legend',
			content: 'legend'
		},
		{
			block: 'button',
			content: 'кнопка'
		}
	]
});
