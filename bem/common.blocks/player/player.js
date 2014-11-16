modules.define('player', function (resolve) {
    provide({

        init: function(config) {

            var vlc = document.querySelector('.player EMBED');
            vlc.width = config.width || 640;
            vlc.height = config.height || 480;

            this._player = vlc;

            return this;
        },
        /**
         * Добавить плейлист - массив объектов с url
         * @param playlist {Array} [{ url:'http://videostream', title:'RedBull', options:[] }]
         * options vlc - look README, sample  [":aspect-ratio=4:3"]
         */
        addPlaylist: function(playlist) {

            playlist.map((function(videoInfo) {
                videoInfo.id = this.playlist.add(
                    videoInfo.url, videoInfo.title);

                return videoInfo;
            }).bind(this._player));

        },

        clearPLaylist: function() {
            return this._player.playlist.items.clear();
        },

        play: function() {
            return this._player.playlist.play();
        },

        next: function() {
            return this._player.playlist.next();
        },

        prev: function() {
            return this._player.playlist.prev();
        },

        stop: function() {
            return this._player.playlist.stop();
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

        insertLogo: function(file, options) {
            var player = this._player;

            if (player.video.logo == null) {
                console.log('logo not suported');
            }

            player.video.logo.file(file);

            if (options != null) {
                this.setLogoOptions(options);
            }

            this.logoEnabled();
        },

        /**
         * Change options for Logo
         * @param options.opacity {Number} 0-255
         * @param options.position {String} "center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"
         * @param options.delay {Number} (supported in this._player version >= 1.1.0) display each picture for a duration of 1000 ms (default) before displaying the next picture.
         * @param options.repeat {Number} display each picture for a duration of 1000 ms (default) before displaying the next picture.
         * @param options.x {Number} change the x-offset for displaying the picture counting from top-left on the screen.
         * @param options.y {Number} change the y-offset for displaying the picture counting from top-left on the screen.
         * @param options.width {Number} change the picture width.
         * @param options.height {Number} change the picture height.
         */
        setLogoOptions: function(options) {
            this._player.video.logo.opacity = typeof options.opacity === 'number' ? options.opacity : 255;
            this._player.video.logo.delay = typeof options.delay === 'number' ? options.delay : 1000;

            this._player.video.logo.position = 'center';
            if (typeof options.position === 'string') {
                this._player.video.logo.position  = options.position;
            } else  {
                this._player.video.logo.x = typeof options.x === 'number' ? options.x : 255;
                this._player.video.logo.y = typeof options.y === 'number' ? options.y : 255;
            }

            this._player.video.logo.repeat = typeof options.repeat === 'number' ? options.repeat : 1000;

            if (typeof options.width === 'number') {
                this._player.video.logo.width = options.width;
            }

            if (typeof options.height) {
                this._player.video.logo.height = options.height;
            }
        },

        logoEnabled: function() {
            return this._player.video.logo.enable();
        },

        logoDisabled: function() {
            return this._player.video.logo.disable();
        }

    });
});