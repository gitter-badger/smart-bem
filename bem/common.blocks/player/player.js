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

    var Player = function(config) {
        this._createDom(config);

        if (config.targetDom) {
            this.appendTo(config.targetDom);
        }
    };

    PLayer.prototype = {

        _createDom: function(config) {

            var vlc = document.createElement('EMBED');
            vlc.type = 'application/x-vlc-plugin';
            vlc.pluginspage = 'http://www.videolan.org';

            vlc.width = config.width || 640;
            vlc.height = config.height || 480;

            this._player = vlc;

            return this;
        },

        /**
         * Вставить плеер в DOM едерево
         * @param dom {Node} sample DIV
         * @returns {XML|Node}
         */
        appendTo: function(dom) {
            return dom.appendChild(this._player);
        },

        /**
         * Добавить плейлист - массив объектов с url
         * @param playlist {Array} [{ url:'http://videostream', name:'RedBull', options:[] }]
         * options vlc - look README, sample  [":aspect-ratio=4:3"]
         */
        addPlaylist: function(playlist) {

            playlist.forEach((function(videoInfo) {

                videoInfo.id = this.playlist.add(
                    videoInfo.url,
                    videoInfo.name || 'Some video',
                    typeof videoInfo.options === 'array' || []
                );

                this.playlist.playItem(videoInfo.id);

            }).bind(this._player));

        },

        clearPLaylist: function() {
           return this._player.playlist.items.clear();
        },

        play: function() {
            this._player.playlist.play();
        },

        stop: function() {
            this._player.playlist.stop();
        },

        isPlaying: function() {
            return this._player.playlist.isPlaying;
        },

        getState: function() {
            return this._player.input.state;
        },

        getNameState: function() {
            return [
                'IDLE',
                'OPENING',
                'BUFFERING',
                'PLAYING',
                'PAUSED',
                'STOPPING',
                'ENDED',
                'ERROR'
            ][this.getState()];
        },

        fullscreen: function() {

        },

        resume: function() {

        },

        ready: function() {

        },

        bufferingStart: function() {

        },

        bufferingEnd: function() {

        },

        error: function() {

        },

        insertLogo: function() {
            /*
             vlc.video.logo.opacity: (supported in vlc version >= 1.1.0) change the picture opacity, val is defined from 0 (completely transparent) to 255 (completely opaque).
             vlc.video.logo.position: (supported in vlc version >= 1.1.0) change the text position ("center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right").
             vlc.video.logo.delay: (supported in vlc version >= 1.1.0) display each picture for a duration of 1000 ms (default) before displaying the next picture.
             vlc.video.logo.repeat: (supported in vlc version >= 1.1.0) number of loops for picture animation (-1=continuous, 0=disabled, n=n-times). The default is -1 (continuous).
             vlc.video.logo.x: (supported in vlc version >= 1.1.0) change the x-offset for displaying the picture counting from top-left on the screen.
             vlc.video.logo.y: (supported in vlc version >= 1.1.0) change the y-offset for displaying the picture counting from top-left on the screen.
             vlc.video.logo.width: (supported in vlc version >= 1.1.0) change the picture width.
             vlc.video.logo.height: (supported in vlc version >= 1.1.0) change the picture height.
             methods
             vlc.video.logo.enable(): (supported in vlc version >= 1.1.0) enable logo video filter.
             vlc.video.logo.disable(): (supported in vlc version >= 1.1.0) disable logo video filter.
             vlc.video.logo.file("file.png"): (supported in vlc version >= 1.1.0) display my file.png as logo on the screen.
             Some problems may happen because of the VLC asynchronous functioning. To avoid it, after enabling logo video filter, you have to wait a little time before changing an option. But it should be fixed by the new vout implementation.
             */
        }

    };

    resolve(Core);
});