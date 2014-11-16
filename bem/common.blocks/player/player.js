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
            var eventNameSpace = 'player:';

            var getEventName = function(event) {
                return [eventNameSpace, event].join('');
            };

            pubsub.on(getEventName('play'), this.play.bind(this));
            pubsub.on(getEventName('stop'), this.play.bind(this));
            pubsub.on(getEventName('next'), this.play.bind(this));
            pubsub.on(getEventName('prev'), this.play.bind(this));
            pubsub.on(getEventName('mute'), this.toggleMute.bind(this));
            pubsub.on(getEventName('volume'), this.toggleMute.bind(this));


            function handleEvents(event) {
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

                pubsub.emit(getEventName(event.type), event);
            }

            /*
             MediaPlayerNothingSpecial: vlc is in idle state doing nothing but waiting for a command to be issued
             MediaPlayerOpening: vlc is opening an media resource locator (MRL)
             MediaPlayerBuffering: vlc is buffering
             MediaPlayerPlaying: vlc is playing a media
             MediaPlayerPaused: vlc is in paused state
             MediaPlayerStopped: vlc is in stopped state
             MediaPlayerForward: vlc is fastforwarding through the media (works only when an input supports forward playback)
             MediaPlayerBackward: vlc is going backwards through the media (works only when an input supports backwards playback)
             MediaPlayerEncounteredError: vlc has encountered an error and is unable to continue
             MediaPlayerEndReached: vlc has reached the end of current playlist
             MediaPlayerTimeChanged: time has changed
             MediaPlayerPositionChanged: media position has changed
             MediaPlayerSeekableChanged: media seekable flag has changed (true means media is seekable, false means it is not)
             MediaPlayerPausableChanged: media pausable flag has changed (true means media is pauseable, false means it is not)
             */

            this._registerEvent('MediaPlayerNothingSpecial', handleEvents);
            this._registerEvent('MediaPlayerOpening', handleEvents);
            this._registerEvent('MediaPlayerBuffering', handleEvents);
            this._registerEvent('MediaPlayerPlaying', handleEvents);
            this._registerEvent('MediaPlayerPaused', handleEvents);
            this._registerEvent('MediaPlayerForward', handleEvents);
            this._registerEvent('MediaPlayerBackward', handleEvents);
            this._registerEvent('MediaPlayerEncounteredError', handleEvents);
            this._registerEvent('MediaPlayerEndReached', handleEvents);
            this._registerEvent('MediaPlayerTimeChanged', handleEvents);
            this._registerEvent('MediaPlayerPositionChanged', handleEvents);
            this._registerEvent('MediaPlayerSeekableChanged', handleEvents);
            this._registerEvent('MediaPlayerPausableChanged', handleEvents);

        },

        _registerEvent: function (eventName, handler) {
            var player = this._player;

            handler = handler.bind(this);

            if (player.attachEvent) {
                player.attachEvent (eventName, handler);
            } else if (vlc.addEventListener) {
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