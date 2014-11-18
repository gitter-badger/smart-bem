module.exports = function(bh) {

	var bh = new (require('bh').BH);

	bh.match('button', function(ctx) {

		ctx.tag('em');

		/*ctx.content({
			elem: 'Текст кнопки из шаблонизатора button.bh.js',
			content: ctx.content()
		}, true);*/
	});

};