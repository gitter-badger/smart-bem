modules.define('page', ['navigation', 'jquery'], function (provide, Nav, $) {


    console.log('init page', $(document.body));

    $(document.body).bind('nav:left nav:right nav:up nav:down', function (e) {
        var cur, $navs, n;

        console.log('event nav', e, Nav.area_selector);

        debugger;

        cur = Nav.current();
        $navs = Nav.$container.find(Nav.area_selector).filter(':visible');
        n = Nav.findNav(cur, e.keyName, $navs);
        n && Nav.current(n);
    });

    provide({
        nav: Nav
    })
});

modules.require('page', function(page) {
    page.nav.on(document.body);
});