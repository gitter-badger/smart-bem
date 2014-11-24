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
		{ block: 'button', content: 'Кнопка' }
		/*
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
		 */
	]
})