module.exports = function (bh) {
    bh.match('items', function (ctx) {
        ctx.tag('ul');
    });

	/*bh.match('items__item', function (ctx) {
		ctx.tag('li');
	});*/

	bh.match('items__title', function (ctx) {
		ctx.tag('h3');
	});

	bh.match('items__image', function (ctx) {
		ctx.tag('img');
		ctx.attr('src', this.ctx.url);
	});

	bh.match('items__price', function (ctx) {
		ctx.tag('span');
	});
};
