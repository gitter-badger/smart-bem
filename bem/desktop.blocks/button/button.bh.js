module.exports = function(bh) {

	var bh = new (require('bh').BH);

	bh.match('button', function(ctx) {
		ctx.tag('span');
		ctx.content({
			elem: 'text',
			content: ctx.content()
		}, true);
	});

	bh.processBemJson({ block: 'button' });
	bh.apply({ block: 'button' });

};