bh.match('player', function(ctx) {
    var width, height;

    width = ctx.ctx.width || 600;
    height = ctx.ctx.height || 480;

    ctx.tag('div');
    ctx.attr('width', width);
    ctx.attr('height', height);

    ctx.content({
        tag: 'EMBED',
        attrs: {
            width: width,
            height: height,
            type: 'application/x-vlc-plugin',
            pluginspage: 'http://www.videolan.org'
        },
        content:  [
            'Install to UBUNTU',
            '% sudo apt-get update',
            '\r\n',
            '% sudo apt-get install vlc browser-plugin-vlc'
        ].join('')
    });
});