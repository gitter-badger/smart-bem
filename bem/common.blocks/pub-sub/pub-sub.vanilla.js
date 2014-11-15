modules.define('pub-sub', ['socketio', 'events__channels'], function (provide, channels) {
    provide({
        pub: function (channel, msg) {
            
            channels(channel);
            emitter.emit(msg);
        },
        sub: function (channel, listener) {
            channels(channel);
            emitter.on(listener);
        }
    });
});
