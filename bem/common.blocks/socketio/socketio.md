# SocketIO

`socket.io` wrapper for BEM realized in two technologies: browser.js and node.js.

To use this you should provide some host to load `socket.io` client library. Contribute please if you know how to make it better :palm_tree:

## Usage

Install `socket.io` and `socket.io-wildcard` packages via npm.

Make file `/etc/socketioClientHost` with host and port where `socket.io` will be loaded and `socketioServerPort` for server listening and put socketio block as dependency in your bundle.

socketioClientHost file:
```
localhost:8081
```

socketioServerPort file:
```
8081
```

Part of deps.js (if it should be used by another block, for example by some page):
```
{
    shouldDeps: ['socketio']
}
```

And so on...

```js
modules.require('socketio', function (io) {
    // io.socket will contains ready to use EventEmitter
    io.socket.on('news', function (data) {
        console.log(data);
    });
});
```

http://socket.io/docs/
