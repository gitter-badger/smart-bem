modules.define('scene-manager', ['i-bem__dom', 'pub-sub'], function (provide, BEMDOM, PubSub) {
	provide(BEMDOM.decl('scene-manager', {
		onSetMod: {
			js: function () {
				console.log(123);
			}
		}
	}));
});
