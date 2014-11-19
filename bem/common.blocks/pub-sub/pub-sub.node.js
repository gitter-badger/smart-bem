modules.define('pub-sub', ['socketio', 'events__channels'], function (provide, io, channels, prev) {
    prev = prev || {};
    var pubsub = io.of('/pub-sub');
    var channel = channels('pub-sub');

    pubsub.on('connection', function (socket) {
        var uuid = String(socket.handshake.headers.cookie).substr(3);
        console.log(uuid, 'connection happend');

        socket.on('disconnect', function () {
            console.log(uuid, 'disconnected');
        });

        socket.on('message', function (msg) {
            if (!(msg.type && msg.data && msg.emitter && msg.tm)) {
                console.log('catched invalid /pubsub:message', msg);
                // skip unknown packets
                return;
            }
            console.log('broadcasting /pubsub:message ', msg.type, msg.data, ' from ', msg.emitter);
            // send to all connected clients
            pubsub.emit('message', msg);
            // send to inner listeners - can we filter messages here?
            channel.emit(msg.type, msg.data);
        });
    });

    prev.on = function (ev, listener) {
        console.log('listening /pubsub:' + ev);
        channel.on(ev, listener);
    };

    prev.un = function (ev, listener) {
        console.log('unlistening /pubsub:' + ev);
        channel.un(ev, listener);
    };

    prev.emit = function (ev, msg) {
        console.log('emitting /pubsub:' + ev, msg);
        channel.emit(ev, msg);
        pubsub.send({type: ev, data: msg, uuid: 'nodejs', tm: Date.now()});
    };

    provide(prev);
});
