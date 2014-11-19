modules.define('socketio', ['loader_type_js'], function (provide, loader) {
    var host = ('borschik:include:../../../etc/socketioClientHost').replace(/\s*/g, '');

    // `socket.io` made with love. we should load autogenerated client library
    // from server. It ensures us to have exactly the same version as on the server
    loader('//' + host + '/socket.io/socket.io.js', function () {
        io.of = function (nsp) {
            return io.connect('http://' + host + nsp);
        };

        // do we need it?
        var socket;
        Object.defineProperty(io, 'socket', {
            value: function () {
                if (!socket) {
                    socket = io('http://' + host);
                }
                return socket;
            }
        });

        provide(io);
    });
});
