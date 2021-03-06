({
    block: 'page',
    title: 'player',
    head: [
        { elem: 'css', url: '_player.css' }
    ],
    scripts: [{ elem: 'js', url: '_player.js' }],
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