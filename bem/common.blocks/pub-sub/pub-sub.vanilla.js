modules.define('pub-sub', ['socketio', 'events__channels'], function (provide, io, channels) {

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

    var channel = channels('socketio');
    var socket = io.socket || io('//localhost:8081');
    var broadcasting = [];

    socket.on(function (ev, msg) {
        channel.emit(ev, msg);
    });

    provide({
        emit: function (ev, msg) {
            socket.emit(ev, msg);
            channel.emit(ev, msg);
        },
        on: function (ev, listener) {
            channel.on(ev, listener);
        },
        un: function (ev, listener) {
            channel.un(ev, listener);
        }
    });

});
