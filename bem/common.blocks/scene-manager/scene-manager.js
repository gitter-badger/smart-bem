modules.define('scene-manager', ['bem__dom', pub-sub'], function (pubsub, BEMDOM) {
	BEMDOM.decl('scene-manager', {
		onSetMod: {
			js: function () {
				console.log(123);
			}
		}
	});
});
