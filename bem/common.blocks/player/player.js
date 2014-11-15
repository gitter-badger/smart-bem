modules.define('player', function (resolve) {

    /*
    * play
    * pause
    * resume
    * stop
    * ready (получена вся информация о потоке и готовность проигрвания)
    * bufferingStart
    * bufferingEnd
    * error
    */


    var Player = function() {

        };

    PLayer.prototype = {
        play: function() {

        },
        stop: function() {

        }
    };

    resolve(Core);
});