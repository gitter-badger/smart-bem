modules.define('player', ['pub-sub'],function (provide, pubsub) {
    provide({

        init: function(config) {

            var vlc = document.querySelector('.player EMBED');
            vlc.width = config.width || 640;
            vlc.height = config.height || 480;

            this._player = vlc;

            this._bindEvents();

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

        _bindEvents: function() {
            var eventNameSpace, getEventName;

            getEventName = function(event) {
                return [eventNameSpace, event].join('');
            };

            eventNameSpace = 'player:';
            pubsub.on(getEventName('play'), this.play.bind(this));
            pubsub.on(getEventName('stop'), this.play.bind(this));
            pubsub.on(getEventName('next'), this.play.bind(this));
            pubsub.on(getEventName('prev'), this.play.bind(this));
            pubsub.on(getEventName('mute'), this.toggleMute.bind(this));
            pubsub.on(getEventName('volume'), this.volume.bind(this));

            this._registerEvent('MediaPlayerPlaying', function(event) {
                pubsub.emit(getEventName('playing'), event);
            });

            this._registerEvent('MediaPlayerPaused', function(event) {
                pubsub.emit(getEventName('paused'), event);
            });

            this._registerEvent('MediaPlayerPausableChanged', function(event) {
                if (this.getNameState() === 'PLAYING') {
                    pubsub.emit(getEventName('resume'), event);
                }
            });

            this._registerEvent('MediaPlayerSeekableChanged', function(event) {
                if (this.getNameState() === 'STOPPING') {
                    pubsub.emit(getEventName('stopped'), event);
                }
            });

            this._registerEvent('MediaPlayerBuffering', function(event) {
                if (this.getNameState() === 'BUFFERING') {
                    pubsub.emit(getEventName('bufferingStart'), event);
                }
            });

            this._registerEvent('MediaPlayerBuffering', function(event) {
                if (this.getNameState() !== 'BUFFERING') {
                    pubsub.emit(getEventName('bufferingEnd'), event);
                }
            });

            this._registerEvent('MediaPlayerEncounteredError', function(event) {
                pubsub.emit(getEventName('error'), event);
            });

        },

        _registerEvent: function (eventName, handler) {
            var player = this._player;

            handler = function getEventNormalize(eventName, callback) {
                var targ;

                //this: Player
                if (!event) {
                    event = window.event;
                }

                if (event.target) {
                    // Netscape based browser
                    targ = event.target;
                } else if (event.srcElement) {
                    // ActiveX
                    targ = event.srcElement;
                } else

                if (targ.nodeType === 3) {
                    // defeat Safari bug
                    targ = targ.parentNode;
                }

                event.name = eventName;
                event.target = targ;

                callback.call(player, event);
            };

            if (player.attachEvent) {
                player.attachEvent (eventName, handler);
            } else if (player.addEventListener) {
                player.addEventListener (eventName, handler, false);
            } else {
                player['on' + eventName] = handler;
            }
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

        /**
         * volume
         * @param value {Number} min 0 max 200
         */
        volume: function(value) {
            value = typeof value === 'number' ? value : 100;

            value = value < 0 ? 0 : (value > 200 ? 200 : value);

            this._player.audio.volume = value;
        },

        toggleMute: function() {
            this._player.audio.toggleMute()
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