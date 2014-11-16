({
	block: 'page',
	title: 'Каталог фильмов, сериалов - Smart-TV framework',
	favicon: '/favicon.ico',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		//{ elem: 'css', url: 'http://yastatic.net/bootstrap/3.1.1/css/bootstrap.min.css' },
			{ elem: 'css', url: 'http://fonts.googleapis.com/css?family=Open+Sans:400,700,300' },
		{ elem: 'css', url: '_index.css' }
	],
	scripts: [
		{ elem: 'js', url: '_index.js' }
	],
	mods: { theme: 'brew' },
	content: [
		{
			block: 'catalog',
			mix: [{
				block: 'bg',
				mods: { color: 'black' }
			}],
			content: [
				{
					block: 'items',
					items: [
						{
							title: 'Apple iPhone 4S 32Gb',
							image: 'http://mdata.yandex.net/i?path=b1004232748_img_id8368283111385023010.jpg',
							price: '259',
							url: '/'
						},
						{
							title: 'Samsung Galaxy Ace S5830',
							image: 'http://mdata.yandex.net/i?path=b0206005907_img_id5777488190397681906.jpg',
							price: '73',
							url: '/'
						},
						{
							title: 'HTC One S',
							image: 'http://mdata.yandex.net/i?path=b0229115752_img_id5362588736801424341.jpg',
							price: '152',
							url: '/'
						},
						{
							title: 'Sharp SH530U',
							image: 'http://mdata.yandex.net/i?path=b1119145405_img_id7474251838115767025.jpg',
							price: '***',
							url: '/',
							new: true
						},
						{
							title: 'Samsung Galaxy S III 16Gb',
							image: 'http://mdata.yandex.net/i?path=b0503234231_img_id4954748565558111178.jpg',
							price: '180',
							url: '/'
						}
					]
				}
			]
		},
/*		{
			block: 'legend',
			content: [{ elem: 'R' }, { elem: 'G' }, { elem: 'Y' }, { elem: 'B' }]
		}*/
		{
			block: 'legend',
			mix: [{
				block: 'bg',
				mods: { color: 'gray' }
			}],
			content: [
				{
					elem: 'desc',
					content: 'текстовое описание'
				},
				{
					block: 'button',
					mods: { bg: 'red' },
					text: 'Red'
				},
				{
					block: 'button',
					mods: { bg: 'green' },
					text: 'Green'
				},
				{
					block: 'button',
					mods: { bg: 'yellow' },
					text: 'Yellow'
				},
				{
					block: 'button',
					mods: { bg: 'blue' },
					text: 'Blue'
				}
			]
		}
	]
})