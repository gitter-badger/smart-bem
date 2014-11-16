# API плеера
_В данном модуле не должно быть никакой привязки к UI!_

* [ * ] плеер должен вызывать события
    * playing
    * paused
    * resume
    * stoped
    * [] ready (получена вся информация о потоке и готовность проигрвания)
    * bufferingStart
    * bufferingEnd
    * error

* [ * ] плеер слушает события
    *  play - запустить проигрывание
    *  stop - остановить видео
    *  next - переключить на сдеующее видео по плейлисту
    *  prev - переключить на предыдущее видео по плейлисту
    *  mute - включть\выключить звук
    *  volume - установить значение звука 0 - 200

* [ ] необходимо хранение информации о текущем файле/потоке
    * длительность
    * текущее время
    * ширина потока
    * высота потока

Функционал:

* [ ] проигрывание файла(учитывать hls и DRM)
* [ ] остановка проигрывания
* [ ] пауза/продорлжение
* [ ] перемотка вперед/назад
* [ ] установка текущего времени проигрывания
* [ ] работа с субтитрами **необходимо разбить**
* [ ] работа с аудиодорожками **необходимо разбить**


### Плееры:

1. [VLC](https://ru.wikipedia.org/wiki/VLC), [browser plugin](https://wiki.videolan.org/Documentation:WebPlugin/)

[Install vlc plugin for FF (Ubuntu)](http://www.videolan.org/vlc/download-ubuntu.html)

```bash
% sudo apt-get update
% sudo apt-get install vlc browser-plugin-vlc
```

### live streem

```javascript
var playlist = ([
    {
        title: 'Europa plus',
        url: 'http://europaplus.cdnvideo.ru/europaplus-live/eptv_main.sdp/playlist.m3u8',
        type: 'hls'
    },
    {
        title: 'PIK TV',
        url: 'http://phone.pik-tv.com/live/mp4:piktv3pik3tv/playlist.m3u8',
        type: 'hls'
    },
    {
        title: 'Redbull',
        url: 'http://live.iphone.redbull.de.edgesuite.net/webtvHD.m3u8',
        type: 'hls'
    }
]);
```

### VLC API

```javascript
vlc.playlist.play(): start playing the current playlist item
vlc.playlist.playItem(number): start playing the item whose identifier is number
vlc.playlist.pause(): pause the current playlist item
vlc.playlist.togglePause(): toggle the pause state for the current playlist item
vlc.playlist.stop(): stop playing the current playlist item
vlc.playlist.next(): iterate to the next playlist item
vlc.playlist.prev(): iterate to the previous playlist item
vlc.playlist.clear(): empty the current playlist, all items will be deleted from the playlist (deprecated, do not use, see Playlist items)
vlc.playlist.removeItem(number): remove the item from playlist whose identifier is number (deprecated, do not use, see Playlist items)
```


[format list item](https://wiki.videolan.org/MRL/):
`[[access][/demux]://]URL[#[title][:chapter][-[title][:chapter]]] [:option=value ...]`

`file/m4v://home/pavpow/Videos/fly/GP030209.MP4`

#### How play

```javascript

    var options = [":aspect-ratio=4:3"];
    var id = vlc.playlist.add('http://phone.pik-tv.com/live/mp4:piktv3pik3tv/playlist.m3u8');
    vlc.playlist.playItem(id);

    // run play
    vlc.playlist.play();

    setTimeout(vlc.playlist.stop.bind(vlc.playlist), 20000);
```