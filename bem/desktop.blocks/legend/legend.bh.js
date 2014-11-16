module.exports = function(bh) {

	bh.match('legend', function(ctx) {
		ctx.tag('div');
	});

	['R', 'G', 'Y', 'B'].forEach(function(elem) {

		bh.match('legend__' + elem, function(ctx) {
			ctx.tag('button');
		});

	});

}