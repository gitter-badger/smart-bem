module.exports = {
	block: 'page',
	content: [
		{
			elem: 'head',
			content: [
				{ block: 'meta', attrs: { charset: 'utf-8' }},
				{ block: 'meta', attrs: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }},
				{ title: 'Каталог фильмов, сериалов - Smart-TV framework'},
				{ block: 'meta', attrs: { name: 'keywords', content: '' }},
				{ block: 'meta', attrs: { name: 'description', content: '' }},

				{ block: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' }},
				{ block: 'css', url: 'index.css' }
			]
		},
		{
			elem: 'body',
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
		}
	]
};
