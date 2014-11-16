modules.define('navigation', ['jquery', 'keymap'], function (provide, $, keymap) {

    var $body = null,

        savedNavs = [],
        navCur = null,

        numsKeys = ['n0', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9'],
        paused = 0,
        Nav;

    /**
     * Handler for keydown events
     * @param e
     */
    function onKeyDown (e) {
        var data = {},
            keyCode = e.keyCode,
            key;

        if (paused || !navCur) {
            return;
        }

        // get key name by key code
        key = keymap.keys[keyCode];

        if (key) {
            if (numsKeys.indexOf(key) > -1) {
                // get 1 char from keyname
                data.num = key[1];
                key = 'num';
            }

            triggerKeyEvent(key, data);
        }
    }

    /**
     * 'nav:keyname' event trigger
     * @param key key name
     * @param data event data
     */
    function triggerKeyEvent (key, data) {
        var ev;

        if (navCur) {
            ev = $.Event('nav:' + key, data || {});
            ev.keyName = key;

            navCur.trigger(ev);
        }
    }

    /**
     * trigger click on current element
     */
    function onClick () {
        navCur && navCur.click();
    }

    /**
     * Main navigation api
     * @type {Object}
     */
    Nav = {

        // nav els selector
        area_selector: '.nav-item',

        // selector for container with horizontal or vertical navigation
        type_selector: '.nav-type',

        /**
         * Current el class
         * @type {string}
         */
        higlight_class: 'items__item_new_yes',

        /**
         * navigation container
         * @type {jQuery}
         */
        $container: null,

        enableUserDefine: true,
        enableEntryPoints: false,

        phantom_selector: '.nav-phantom',

        isPaused: function () {
            return !!paused;
        },

        pause: function () {
            paused++;
            return this;
        },

        resume: function (force) {
            paused--;
            if (paused < 0 || force) {
                paused = 0;
            }
            return this;
        },

        save: function () {

            savedNavs.push({
                navCur: navCur,
                area_selector: this.area_selector,
                higlight_class: this.higlight_class,
                $container: this.$container
            });

            return this;
        },

        restore: function () {
            var state;

            if (savedNavs.length) {
                state = savedNavs.pop();
                this.off();

                this.area_selector = state.area_selector;
                this.higlight_class = state.higlight_class;

                this.on(state.$container, state.navCur);
            }

            return this;
        },

        current: function (element, originEvent) {
            if (!element) {
                return navCur;
            }

            var $el = $(element),
                old = navCur;

            originEvent = originEvent || 'nav';

            if ($el.is(this.phantom_selector)) {
                $el = $($($el.attr('data-nav-phantom'))[0]);
            }

            if ($el.length > 1) {
                $el = $el.first();
            } else if (!$el.length) {
                return this;
            }

            if (navCur) {
                navCur
                    .removeClass(this.higlight_class)
                    .trigger('nav_blur', [originEvent, $el]);
            }

            navCur = $el;

            $el.addClass(this.higlight_class).trigger('nav_focus', [originEvent, old]);
            return this;
        },

        on: function (container, cur) {
            var $navTypeEls;

            $body = $body || $(document.body);

            this.off();

            this.$container = container ? $(container) : $body;

            $navTypeEls = this.$container.find(this.type_selector);

            if (this.$container.is(this.type_selector)) {
                $navTypeEls = $navTypeEls.add(this.$container);
            }

            $navTypeEls.each(this._setTypedNav.bind(this));

            $body.on({
                'keydown.navigation': onKeyDown,
                'nav:enter.navigation': onClick
            });

            console.log('ON BODY');

            if (!cur) {
                // TODO: remove :visible, it is very HEAVY filter!
                cur = this.$container.find(this.area_selector).filter(':visible').first();
            }

            this.current(cur);
            return this;
        },

        /**
         * Set horizontal or vertical type navigation in container
         * @param el
         */
        _setTypedNav: function (i, el) {
            var self = this,
                $el = $(el),
                type = el.getAttribute('data-nav_type'),
                loop = !!el.getAttribute('data-nav_loop');

            el.removeAttribute('data-nav_type');

            // TODO: refactor, too HEAVY
            $el.on('nav:left nav:right nav:up nav:down', this.area_selector,
                function (e) {
                    var key = e.keyName,
                        currentEl = self.current(),
                        next,
                        last,
                        fn;

                    //check if direction concur with declared
                    if ((type === 'hbox' && key ==='left') ||
                        (type === 'vbox' && key === 'up')) {
                        fn = 'prev';
                    } else if ((type === 'hbox' && key === 'right') ||
                        (type === 'vbox' && key === 'down')) {
                        fn = 'next';
                    }

                    last = (fn === 'next') ? 'first' : 'last';

                    if (fn) {
                        next = currentEl[fn](self.area_selector);

                        while (next.length && !next.is(':visible')) {
                            next = next[fn](self.area_selector);
                        }

                        if (!next.length && loop) {
                            next = $el.find(self.area_selector).filter(':visible')[last]();
                        }

                        if (next.length) {
                            self.current(next);
                            return false;
                        }
                    }
                });
        },

        off: function () {
            if (navCur) {
                navCur
                    .removeClass(this.higlight_class)
                    .trigger('nav_blur');
            }

            this.$container && this.$container.off('.loop');

            $body.off('.navigation');
            navCur = null;

            return this;
        },

        findNav: function ($el, dir, navs) {
            var userDefined = this.checkUserDefined($el, dir);

            if (userDefined) {
                return userDefined === 'none' ? false : userDefined;
            }

            var objBounds = $el[0].getBoundingClientRect(),
                arr = [],
                curBounds = null,
                cond1, cond2, i, l;

            for (i = 0, l = navs.length; i < l; i++) {
                curBounds = navs[i].getBoundingClientRect();

                if (curBounds.left == objBounds.left &&
                    curBounds.top == objBounds.top) {
                    continue;
                }

                switch (dir) {
                    case 'left':
                        cond1 = objBounds.left > curBounds.left;
                        break;
                    case 'right':
                        cond1 = objBounds.right < curBounds.right;
                        break;
                    case 'up':
                        cond1 = objBounds.top > curBounds.top;
                        break;
                    case 'down':
                        cond1 = objBounds.bottom < curBounds.bottom;
                        break;
                    default:
                        break;
                }

                if (cond1) {
                    arr.push({
                        'obj': navs[i],
                        'bounds': curBounds
                    });
                }
            }

            var min_dy = 9999999, min_dx = 9999999, min_d = 9999999, max_intersection = 0;
            var dy = 0, dx = 0, d = 0;

            function isIntersects (b1, b2, dir) {
                var temp = null;
                switch (dir) {
                    case 'left':
                    case 'right':
                        if (b1.top > b2.top) {
                            temp = b2;
                            b2 = b1;
                            b1 = temp;
                        }
                        if (b1.bottom > b2.top) {
                            if (b1.top > b2.right) {
                                return b2.top - b1.right;
                            }
                            else {
                                return b2.height;
                            }
                        }
                        break;
                    case 'up':
                    case 'down':
                        if (b1.left > b2.left) {
                            temp = b2;
                            b2 = b1;
                            b1 = temp;
                        }
                        if (b1.right > b2.left) {
                            if (b1.left > b2.right) {
                                return b2.left - b1.right;
                            }
                            else {
                                return b2.width;
                            }
                        }
                        break;
                    default:
                        break;
                }
                return false;
            }

            var intersects_any = false;
            var found = false;

            for (i = 0, l = arr.length; i < l; i++) {
                if (!this.checkEntryPoint(arr[i].obj, dir)) {
                    continue;
                }

                var b = arr[i].bounds;
                var intersects = isIntersects(objBounds, b, dir);
                dy = Math.abs(b.top - objBounds.top);
                dx = Math.abs(b.left - objBounds.left);
                d = Math.sqrt(dy * dy + dx * dx);
                if (intersects_any && !intersects) {
                    continue;
                }
                if (intersects && !intersects_any) {
                    min_dy = dy;
                    min_dx = dx;
                    max_intersection = intersects;
                    found = arr[i].obj;
                    intersects_any = true;
                    continue;
                }

                switch (dir) {
                    case 'left':
                    case 'right':
                        if (intersects_any) {
                            cond2 = dx < min_dx || (dx == min_dx && dy < min_dy);
                        }
                        else {
                            cond2 = dy < min_dy || (dy == min_dy && dx < min_dx);
                        }
                        break;
                    case 'up':
                    case 'down':
                        if (intersects_any) {
                            cond2 = dy < min_dy || (dy == min_dy && dx < min_dx);
                        }
                        else {
                            cond2 = dx < min_dx || (dx == min_dx && dy < min_dy);
                        }
                        break;
                    default:
                        break;
                }
                if (cond2) {
                    min_dy = dy;
                    min_dx = dx;
                    min_d = d;
                    found = arr[i].obj;
                }
            }

            return found;
        },

        checkUserDefined: function ($el, dir) {

            if (!this.enableUserDefine) {
                return false;
            }

            var userDefined = $el.data('nav_ud'),
                res = $el.data('nav_ud_' + dir),
                result = false,
                dirs = ['up', 'right', 'down', 'left'],
                sides;

            if (!userDefined && !res) {
                return false;
            }

            if (!res) {
                sides = userDefined.split(',');

                if (sides.length !== 4) {
                    return false;
                }

                $el.data({
                    'nav_ud_up': sides[0],
                    'nav_ud_right': sides[1],
                    'nav_ud_down': sides[2],
                    'nav_ud_left': sides[3]
                });

                res = sides[dirs.indexOf(dir)];
            }

            switch (res) {
                case 'none':
                    result = 'none';
                    break;
                case '0':
                    result = false;
                    break;
                default:
                    result = $(res).first();
                    break;
            }

            return result;
        },

        checkEntryPoint: function (elem, dir) {

            if (!this.enableEntryPoints) {
                return true;
            }

            var $el = $(elem),
                ep = $el.attr('data-nav_ep'),
                res;

            if (!ep) {
                return true;
            }

            res = $el.attr('data-nav_ep_' + dir);

            // can be 0
            if (res === undefined) {
                var sides = ep.split(',');
                $el.attr('data-nav_ep_top', sides[0]);
                $el.attr('data-nav_ep_right', sides[1]);
                $el.attr('data-nav_ep_bottom', sides[2]);
                $el.attr('data-nav_ep_left', sides[3]);
                res = $el.attr('data-nav_ep_' + dir);
            }

            return !!parseInt(res);
        }
    };

    provide(Nav);
});