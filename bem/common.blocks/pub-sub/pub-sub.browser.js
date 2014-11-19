modules.define('pub-sub', ['socketio', 'events__channels'], function (provide, io, channels, prev) {
    prev = prev || {};
    var socket = io.of('/pub-sub');
    var channel = channels('pub-sub');

// tmp:
window.pubsub = prev;

    prev.emit = function (ev, msg) {
        console.log('emitting /pubsub:' + ev, msg);
        // emitting event locally
        channel.emit(ev, msg);
        // publishing msg to anybody
        socket.send({type: ev, data: msg, emitter: socket.io.engine.id, tm: Date.now()});
    };

    prev.on = function (ev, listener) {
        channel.on(ev, listener);
    };

    prev.once = function (ev, listener) {
        channel.once(ev, listener);
    };

    prev.un = function (ev, listener) {
        channel.un(ev, listener);
    };

    prev.socket = socket;

    socket.on('message', function (msg) {
        // console.log('got msg ', socket.io.engine.id, msg.emitter, msg);
        // prevent double emit
        if (socket.io.engine.id !== msg.emitter) {
            console.log('got msg', msg.type, msg.data, ' from ', msg.emitter);
            // emitting event
            channel.emit(msg.type, msg.data);
        }
    });

/*
    var socket = io.connect();
    var globalEvent = "*";
    socket.$emit = function (name) {
        if(!this.$events) return false;
        for(var i=0;i<2;++i){
            if(i==0 && name==globalEvent) continue;
            var args = Array.prototype.slice.call(arguments, 1-i);
            var handler = this.$events[i==0?name:globalEvent];
            if(!handler) handler = [];
            if ('function' == typeof handler) handler.apply(this, args);
            else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i=0, l=listeners.length; i<l; i++)
                    listeners[i].apply(this, args);
            } else return false;
        }
        return true;
    };
    socket.on(globalEvent,function(event){
        var args = Array.prototype.slice.call(arguments, 1);
        console.log("Global Event = "+event+"; Arguments = "+JSON.stringify(args));
    });
*/

    provide(prev);

});
