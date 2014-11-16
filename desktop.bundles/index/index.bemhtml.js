(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["focused"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$0() {
                        var __$r__$1;
                        var __$l0__$2 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$1 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$2;
                        return __$r__$1;
                    }(), {
                        live: false
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "box") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "button") {
            if ($$elem === "text" && typeof __$ctx._button.textMaxWidth === "number") {
                return {
                    style: "max-width:" + __$ctx._button.textMaxWidth + "px"
                };
            }
            var __$t = !$$elem;
            if (__$t) {
                if ((!$$mods.type || $$mods.type === "submit") && (__$ctx.__$a0 & 2) === 0) {
                    var __$r = __$b6(__$ctx, __$ref);
                    if (__$r !== __$ref) return __$r;
                }
                var __$r = __$b7(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "items") {
            if ($$elem === "image") {
                return {
                    src: __$ctx.ctx.url
                };
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                if (__$ctx.ctx.url) {
                    return {
                        src: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$r = __$g0(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "button") {
            var __$t = !$$elem;
            if (__$t) {
                if (typeof __$ctx.ctx.content !== "undefined") {
                    return __$ctx.ctx.content;
                }
                var __$r = __$b32(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "legend") {
            if (!$$elem && !__$ctx._done && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b33(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "items") {
            if (!$$elem) {
                var __$r = __$ctx.ctx.items.map(function(item) {
                    return [ {
                        elem: "item",
                        mix: [ {
                            block: "box"
                        } ],
                        content: [ {
                            elem: "title",
                            content: item.title
                        }, {
                            elem: "image",
                            url: item.image
                        }, {
                            elem: "price",
                            content: {
                                block: "link",
                                mix: [ {
                                    block: "items",
                                    elem: "link"
                                } ],
                                url: item.url,
                                content: item.price
                            }
                        } ]
                    }, " " ];
                });
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if ($$elem === "head" && (__$ctx.__$a0 & 32) === 0) {
                return [ __$ctx.ctx["x-ua-compatible"] === false ? false : {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: __$ctx.ctx["x-ua-compatible"] || "IE=edge"
                    }
                }, function __$lb__$36() {
                    var __$r__$37;
                    var __$l0__$38 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 32;
                    __$r__$37 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$38;
                    return __$r__$37;
                }() ];
            }
            if (!$$elem && (__$ctx.__$a0 & 64) === 0) {
                return [ function __$lb__$39() {
                    var __$r__$40;
                    var __$l0__$41 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 64;
                    __$r__$40 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$41;
                    return __$r__$40;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "mix") {
        if ($$block === "button" && !$$elem) {
            return {
                elem: "control"
            };
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "button") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                var __$r = __$b41(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = !__$ctx.ctx._ieCommented;
                if (__$t) {
                    var __$t = __$ctx.ctx.hasOwnProperty("ie");
                    if (__$t) {
                        if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 16) === 0) {
                            var __$r = __$b42(__$ctx, __$ref);
                            if (__$r !== __$ref) return __$r;
                        }
                        var __$r = __$b43(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 128) === 0) {
                var __$r = __$b44(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b45(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 256) === 0) {
            var __$r = __$b55(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b56(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b57(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b58(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b59(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_button"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_ieCommented"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b6(__$ctx, __$ref) {
    var ctx__$5 = __$ctx.ctx, attrs__$6 = {
        type: $$mods.type || "button",
        name: ctx__$5.name,
        value: ctx__$5.val
    };
    $$mods.disabled && (attrs__$6.disabled = "disabled");
    return __$ctx.extend(function __$lb__$7() {
        var __$r__$8;
        var __$l0__$9 = __$ctx.__$a0;
        __$ctx.__$a0 = __$ctx.__$a0 | 2;
        __$r__$8 = applyc(__$ctx, __$ref);
        __$ctx.__$a0 = __$l0__$9;
        return __$r__$8;
    }(), attrs__$6);
}

function __$b7(__$ctx, __$ref) {
    var ctx__$10 = __$ctx.ctx;
    return {
        role: "button",
        tabindex: ctx__$10.tabIndex,
        id: ctx__$10.id,
        title: ctx__$10.title
    };
}

function __$b32(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx, content__$4 = [ ctx__$3.icon ];
    "text" in ctx__$3 && content__$4.push({
        elem: "text",
        content: ctx__$3.text
    });
    return content__$4;
}

function __$b33(__$ctx, __$ref) {
    __$ctx._done = true;
    return {
        elem: "inner",
        content: function __$lb__$17() {
            var __$r__$18;
            var __$l0__$19 = __$ctx.__$a0;
            __$ctx.__$a0 = __$ctx.__$a0 | 8;
            __$r__$18 = applyc(__$ctx, __$ref);
            __$ctx.__$a0 = __$l0__$19;
            return __$r__$18;
        }()
    };
}

function __$b41(__$ctx, __$ref) {
    var __$r__$12;
    var __$l0__$13 = __$ctx._button;
    __$ctx._button = __$ctx.ctx;
    var __$r__$15;
    var __$l1__$16 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 4;
    __$r__$15 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l1__$16;
    __$r__$12 = __$r__$15;
    __$ctx._button = __$l0__$13;
    return;
}

function __$b42(__$ctx, __$ref) {
    var url__$20 = __$ctx.ctx.url;
    var __$r__$22;
    var __$l0__$23 = $$mode;
    $$mode = "";
    var __$l1__$24 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$20 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$26;
    var __$l2__$27 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$26 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$27;
    __$r__$22 = __$r__$26;
    $$mode = __$l0__$23;
    __$ctx.ctx = __$l1__$24;
    return;
}

function __$b43(__$ctx, __$ref) {
    var ie__$28 = __$ctx.ctx.ie, hideRule__$29 = !ie__$28 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$28 === "!IE" ? [ ie__$28, "<!-->", "<!--" ] : [ ie__$28, "", "" ];
    var __$r__$31;
    var __$l0__$32 = $$mode;
    $$mode = "";
    var __$l3__$33 = __$ctx.ctx;
    var __$l1__$34 = __$l3__$33._ieCommented;
    __$l3__$33._ieCommented = true;
    var __$l2__$35 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$29[0] + "]>" + hideRule__$29[1], __$ctx.ctx, hideRule__$29[2] + "<![endif]-->" ];
    __$r__$31 = applyc(__$ctx, __$ref);
    $$mode = __$l0__$32;
    __$l3__$33._ieCommented = __$l1__$34;
    __$ctx.ctx = __$l2__$35;
    return;
}

function __$b44(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$42 = __$ctx.ctx;
    var __$r__$44;
    var __$l0__$45 = $$mode;
    $$mode = "";
    var __$l1__$46 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$42.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, {
                tag: "title",
                content: ctx__$42.title
            }, {
                block: "ua"
            }, ctx__$42.head, ctx__$42.styles, ctx__$42.favicon ? {
                elem: "favicon",
                url: ctx__$42.favicon
            } : "" ]
        }, ctx__$42 ]
    } ];
    var __$r__$48;
    var __$l2__$49 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 128;
    __$r__$48 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$49;
    __$r__$44 = __$r__$48;
    $$mode = __$l0__$45;
    __$ctx.ctx = __$l1__$46;
    __$ctx._defPageApplied = false;
    return;
}

function __$b45(__$ctx, __$ref) {
    var BEM_INTERNAL__$50 = __$ctx.BEM.INTERNAL, ctx__$51 = __$ctx.ctx, isBEM__$52, tag__$53, res__$54;
    var __$r__$56;
    var __$l0__$57 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$58 = $$block;
    var __$r__$60;
    var __$l1__$61 = $$mode;
    $$mode = "tag";
    __$r__$60 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$61;
    tag__$53 = __$r__$60;
    typeof tag__$53 !== "undefined" || (tag__$53 = ctx__$51.tag);
    typeof tag__$53 !== "undefined" || (tag__$53 = "div");
    if (tag__$53) {
        var jsParams__$62, js__$63;
        if (vBlock__$58 && ctx__$51.js !== false) {
            var __$r__$64;
            var __$l2__$65 = $$mode;
            $$mode = "js";
            __$r__$64 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$65;
            js__$63 = __$r__$64;
            js__$63 = js__$63 ? __$ctx.extend(ctx__$51.js, js__$63 === true ? {} : js__$63) : ctx__$51.js === true ? {} : ctx__$51.js;
            js__$63 && ((jsParams__$62 = {})[BEM_INTERNAL__$50.buildClass(vBlock__$58, ctx__$51.elem)] = js__$63);
        }
        __$ctx._str += "<" + tag__$53;
        var __$r__$66;
        var __$l3__$67 = $$mode;
        $$mode = "bem";
        __$r__$66 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$67;
        isBEM__$52 = __$r__$66;
        typeof isBEM__$52 !== "undefined" || (isBEM__$52 = typeof ctx__$51.bem !== "undefined" ? ctx__$51.bem : ctx__$51.block || ctx__$51.elem);
        var __$r__$69;
        var __$l4__$70 = $$mode;
        $$mode = "cls";
        __$r__$69 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$70;
        var cls__$68 = __$r__$69;
        cls__$68 || (cls__$68 = ctx__$51.cls);
        var addJSInitClass__$71 = ctx__$51.block && jsParams__$62 && !ctx__$51.elem;
        if (isBEM__$52 || cls__$68) {
            __$ctx._str += ' class="';
            if (isBEM__$52) {
                __$ctx._str += BEM_INTERNAL__$50.buildClasses(vBlock__$58, ctx__$51.elem, ctx__$51.elemMods || ctx__$51.mods);
                var __$r__$73;
                var __$l5__$74 = $$mode;
                $$mode = "mix";
                __$r__$73 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$74;
                var mix__$72 = __$r__$73;
                ctx__$51.mix && (mix__$72 = mix__$72 ? [].concat(mix__$72, ctx__$51.mix) : ctx__$51.mix);
                if (mix__$72) {
                    var visited__$75 = {}, visitedKey__$76 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$75[visitedKey__$76(vBlock__$58, $$elem)] = true;
                    __$ctx.isArray(mix__$72) || (mix__$72 = [ mix__$72 ]);
                    for (var i__$77 = 0; i__$77 < mix__$72.length; i__$77++) {
                        var mixItem__$78 = mix__$72[i__$77], hasItem__$79 = mixItem__$78.block || mixItem__$78.elem, mixBlock__$80 = mixItem__$78.block || mixItem__$78._block || $$block, mixElem__$81 = mixItem__$78.elem || mixItem__$78._elem || $$elem;
                        hasItem__$79 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$50[hasItem__$79 ? "buildClasses" : "buildModsClasses"](mixBlock__$80, mixItem__$78.elem || mixItem__$78._elem || (mixItem__$78.block ? undefined : $$elem), mixItem__$78.elemMods || mixItem__$78.mods);
                        if (mixItem__$78.js) {
                            (jsParams__$62 || (jsParams__$62 = {}))[BEM_INTERNAL__$50.buildClass(mixBlock__$80, mixItem__$78.elem)] = mixItem__$78.js === true ? {} : mixItem__$78.js;
                            addJSInitClass__$71 || (addJSInitClass__$71 = mixBlock__$80 && !mixItem__$78.elem);
                        }
                        if (hasItem__$79 && !visited__$75[visitedKey__$76(mixBlock__$80, mixElem__$81)]) {
                            visited__$75[visitedKey__$76(mixBlock__$80, mixElem__$81)] = true;
                            var __$r__$83;
                            var __$l6__$84 = $$mode;
                            $$mode = "mix";
                            var __$l7__$85 = $$block;
                            $$block = mixBlock__$80;
                            var __$l8__$86 = $$elem;
                            $$elem = mixElem__$81;
                            __$r__$83 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$84;
                            $$block = __$l7__$85;
                            $$elem = __$l8__$86;
                            var nestedMix__$82 = __$r__$83;
                            if (nestedMix__$82) {
                                for (var j__$87 = 0; j__$87 < nestedMix__$82.length; j__$87++) {
                                    var nestedItem__$88 = nestedMix__$82[j__$87];
                                    if (!nestedItem__$88.block && !nestedItem__$88.elem || !visited__$75[visitedKey__$76(nestedItem__$88.block, nestedItem__$88.elem)]) {
                                        nestedItem__$88._block = mixBlock__$80;
                                        nestedItem__$88._elem = mixElem__$81;
                                        mix__$72.splice(i__$77 + 1, 0, nestedItem__$88);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$68 && (__$ctx._str += isBEM__$52 ? " " + cls__$68 : cls__$68);
            __$ctx._str += addJSInitClass__$71 ? ' i-bem"' : '"';
        }
        if (isBEM__$52 && jsParams__$62) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$62)) + '"';
        }
        var __$r__$90;
        var __$l9__$91 = $$mode;
        $$mode = "attrs";
        __$r__$90 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$91;
        var attrs__$89 = __$r__$90;
        attrs__$89 = __$ctx.extend(attrs__$89, ctx__$51.attrs);
        if (attrs__$89) {
            var name__$92, attr__$93;
            for (name__$92 in attrs__$89) {
                attr__$93 = attrs__$89[name__$92];
                if (typeof attr__$93 === "undefined") continue;
                __$ctx._str += " " + name__$92 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$93) ? attr__$93 : __$ctx.reapply(attr__$93)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$53)) {
        __$ctx._str += "/>";
    } else {
        tag__$53 && (__$ctx._str += ">");
        var __$r__$95;
        var __$l10__$96 = $$mode;
        $$mode = "content";
        __$r__$95 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$96;
        var content__$94 = __$r__$95;
        if (content__$94 || content__$94 === 0) {
            isBEM__$52 = vBlock__$58 || $$elem;
            var __$r__$97;
            var __$l11__$98 = $$mode;
            $$mode = "";
            var __$l12__$99 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$100 = __$ctx.position;
            __$ctx.position = isBEM__$52 ? 1 : __$ctx.position;
            var __$l14__$101 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$52 ? 1 : __$ctx._listLength;
            var __$l15__$102 = __$ctx.ctx;
            __$ctx.ctx = content__$94;
            __$r__$97 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$98;
            __$ctx._notNewList = __$l12__$99;
            __$ctx.position = __$l13__$100;
            __$ctx._listLength = __$l14__$101;
            __$ctx.ctx = __$l15__$102;
        }
        tag__$53 && (__$ctx._str += "</" + tag__$53 + ">");
    }
    res__$54 = __$ctx._str;
    __$r__$56 = undefined;
    __$ctx._str = __$l0__$57;
    __$ctx._buf.push(res__$54);
    return;
}

function __$b55(__$ctx, __$ref) {
    var __$r__$104;
    var __$l0__$105 = $$mode;
    $$mode = "";
    var __$l1__$106 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$108;
    var __$l2__$109 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 256;
    __$r__$108 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$109;
    __$r__$104 = __$r__$108;
    $$mode = __$l0__$105;
    __$ctx.ctx = __$l1__$106;
    return;
}

function __$b56(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$110 = __$ctx.ctx;
    if (ctx__$110 && ctx__$110 !== true || ctx__$110 === 0) {
        __$ctx._str += ctx__$110 + "";
    }
    return;
}

function __$b57(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b58(__$ctx, __$ref) {
    var ctx__$111 = __$ctx.ctx, len__$112 = ctx__$111.length, i__$113 = 0, prevPos__$114 = __$ctx.position, prevNotNewList__$115 = __$ctx._notNewList;
    if (prevNotNewList__$115) {
        __$ctx._listLength += len__$112 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$112;
    }
    __$ctx._notNewList = true;
    while (i__$113 < len__$112) (function __$lb__$116() {
        var __$r__$117;
        var __$l0__$118 = __$ctx.ctx;
        __$ctx.ctx = ctx__$111[i__$113++];
        __$r__$117 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$118;
        return __$r__$117;
    })();
    prevNotNewList__$115 || (__$ctx.position = prevPos__$114);
    return;
}

function __$b59(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$119 = __$ctx.ctx.block, vElem__$120 = __$ctx.ctx.elem, block__$121 = __$ctx._currBlock || $$block;
    var __$r__$123;
    var __$l0__$124 = $$mode;
    $$mode = "default";
    var __$l1__$125 = $$block;
    $$block = vBlock__$119 || (vElem__$120 ? block__$121 : undefined);
    var __$l2__$126 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$119 || vElem__$120 ? undefined : block__$121;
    var __$l3__$127 = $$elem;
    $$elem = vElem__$120;
    var __$l4__$128 = $$mods;
    $$mods = vBlock__$119 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$129 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$123 = undefined;
    $$mode = __$l0__$124;
    $$block = __$l1__$125;
    __$ctx._currBlock = __$l2__$126;
    $$elem = __$l3__$127;
    $$mods = __$l4__$128;
    $$elemMods = __$l5__$129;
    return;
}

function __$g0(__$ctx, __$ref) {
    var __$t = $$block;
    if (__$t === "button") {
        if ($$elem === "text") {
            return "span";
        }
        if (!$$elem) {
            return __$ctx.ctx.tag || "button";
        }
    } else if (__$t === "box") {
        if ($$elem === "switcher") {
            return "span";
        }
    } else if (__$t === "items") {
        var __$t = $$elem;
        if (__$t === "price") {
            return "span";
        } else if (__$t === "image") {
            return "img";
        } else if (__$t === "title") {
            return "h3";
        } else if (__$t === "item") {
            return "li";
        }
        if (!$$elem) {
            return "ul";
        }
    } else if (__$t === "page") {
        var __$t = $$elem;
        if (__$t === "js") {
            return "script";
        } else if (__$t === "css") {
            if (__$ctx.ctx.url) {
                return "link";
            }
            return "style";
        } else if (__$t === "head") {
            return "head";
        } else if (__$t === "favicon") {
            return "link";
        } else if (__$t === "link") {
            return "link";
        } else if (__$t === "meta") {
            return "meta";
        }
        if (!$$elem) {
            return "body";
        }
    } else if (__$t === "ua") {
        if (!$$elem) {
            return "script";
        }
    }
    return undefined;
    return __$ref;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);