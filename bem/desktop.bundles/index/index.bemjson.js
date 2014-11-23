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
	cls: 'nav-type',
	attrs: { 'data-nav_type': 'hbox', 'data-nav_loop':'true'},
	mix: [
		{ block: 'bg', mods: { color: 'black' }},
		{ block: 'align', mods: { horizontal: 'center' } }
	],
	content: [
		{
			block: 'catalog',
			content: [
				{
					block: 'items',
					mix: [
						{ block: 'clearfix' },
						{ block: 'bg', mods: { pattern: 'squared' }}
					],
					items: [
						{
							title: 'некий фильм',
							image: 'http://kinofan.su/cache/com_zoo/images/kraftidioten_41f27c0b95f3474332f619025926d526.jpg',
							desc: 'описание',
							url: '/'
						},
						{
							title: 'некий фильм',
							image: 'http://kinofan.su/cache/com_zoo/images/autmata_b3212532724479c07ed89114d6382ed8.jpg',
							desc: '73',
							url: '/'
						},
						{
							title: 'некий фильм',
							image: 'http://kinofan.su/cache/com_zoo/images/nicht_mein_tag_6d7a8dec9e1f7bafdff4b803f66881b2.jpg',
							desc: '152',
							url: '/'
						},
						{
							title: 'некий новый фильм',
							image: 'http://kinofan.su/cache/com_zoo/images/stretch_113f774653307bac1ffcdc253414b452.jpg',
							desc: '***',
							url: '/',
							new: true
						},
						{
							title: 'некий фильм',
							image: 'http://kinofan.su/cache/com_zoo/images/ek_villain_25ab26e3059dee9c0a2105a939712b83.jpg',
							desc: '180',
							url: '/'
						},
						{
							title: 'некий фильм',
							image: 'http://kinofan.su/cache/com_zoo/images/salvation_ff53f05bbd7722beb73fe2f98434bf5c.jpg',
							desc: '180',
							url: '/'
						},
						{
							title: 'некий фильм',
							image: 'http://kinofan.su/cache/com_zoo/images/ek_villain_25ab26e3059dee9c0a2105a939712b83.jpg',
							desc: '180',
							url: '/'
						},
						{
							title: 'некий фильм',
							image: 'http://kinofan.su/cache/com_zoo/images/supercondriaque_4aa87d0683fb1adf3bf6469643075221.jpg',
							desc: '180',
							url: '/'
						},
						{
							title: 'некий фильм',
							image: 'http://kinofan.su/cache/com_zoo/images/mardaani_e39140ee9d8418878453b74eec9cfca4.jpg',
							desc: '180',
							url: '/'
						}
					]
				}
			]
		},
		{
			block: 'legend',
			mix: [
				{ block: 'align', mods: { vertical: 'middle' }},
				{ block: 'bg', mods: { color: 'white', pattern: 'paper' }}
			],
			content: [
				{
					block: 'button',
					text: 'Текст кнопки из *.bemjson.js',
					mods: { theme: 'islands', size: 'xl', view: 'action' }
				},
				{
					elem: 'desc',
					content: 'текстовое описание'
				},
				{
					block: 'button',
					mods: { bg: 'red' },
					text: 'R'
				},
				{
					block: 'button',
					mods: { bg: 'green' },
					text: 'G'
				},
				{
					block: 'button',
					mods: { bg: 'yellow' },
					text: 'Y'
				},
				{
					block: 'button',
					mods: { bg: 'blue' },
					text: 'B'
				}
			]
		}
	]
})
