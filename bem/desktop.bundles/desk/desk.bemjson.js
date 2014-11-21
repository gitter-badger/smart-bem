({
	block: 'page',
	title: 'desk',
	head: [
		{ elem: 'css', url: '_desk.css' }
	],
	scripts: [
		{ elem: 'js', url: '_desk.js' }
	],
	mods: { theme: 'brew' },
	content: [
		{
			block: 'desk',
			content: [
				{
					block: 'image',
					url: '../../desktop.blocks/image/desk.jpg',
					alt: 'remote control'
				}
			]
		},
		{
			block: 'legend',
			mix: [
				{
					block: 'bg',
					mods: { color: 'gray' }
				}
			],
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