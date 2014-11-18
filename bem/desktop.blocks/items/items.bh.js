module.exports = function (bh) {
    bh.match('items', function (ctx, json) {
        ctx.tag('ul');

        if (!json.items) {
            return;
        }

        ctx.content(json.items.map(function (item) {
            if (!item) {
                return;
            }
            return [
                {
                    elem: 'item',
                    mods: {new: item.new ? 'yes' : undefined},
                    content: [
                        {
                            elem: 'title',
                            content: item.title
                        },
                        {
                            elem: 'image',
                            url: item.image
                        },
                        {
                            elem: 'desc',
                            content: {
                                block: 'link',
                                mix: [
                                    {block: 'items', elem: 'link'}
                                ],
                                url: item.url,
                                content: item.desc
                            }
                        }
                    ]
                },
                ' '
            ];
        }));

    });

    /*bh.match('items__item', function (ctx) {
        ctx.tag('li');
    });*/

    bh.match('items__title', function (ctx) {
        ctx.tag('h3');
    });

    bh.match('items__image', function (ctx, json) {
        ctx.tag('img');
        ctx.attr('src', json.url);
    });

    bh.match('items__price', function (ctx) {
        ctx.tag('span');
    });
};
