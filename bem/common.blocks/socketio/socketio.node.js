modules.define('socketio', function (provide) {
    var fs = require('fs');
    var port = String(fs.readFileSync('./etc/socketioServerPort')).replace(/\s*/g, '');
    var io = require('socket.io').listen(port);

    provide(io);
});
