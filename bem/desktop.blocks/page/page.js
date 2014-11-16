modules.define('page', ['navigation'], function (provide, Nav) {

    // bind events
    $(function () {
        // Navigation events handler
        $(document.body).bind('nav_key:left nav_key:right nav_key:up nav_key:down', function ( e ) {
            var cur = Nav.current(),
                $navs,
                n;

            $navs = Nav.$container.find(Nav.area_selector).filter(':visible');
            n = Nav.findNav(cur, e.keyName, $navs);
            n && Nav.current(n);
        });
    });

    provide({
        nav: Nav
    })
});