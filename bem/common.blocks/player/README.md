# API плеера
_В данном модуле не должно быть никакой привязки к UI!_

* [ ] плеер должен вызывать события
    * play
    * pause
    * resume
    * stop
    * ready (получена вся информация о потоке и готовность проигрвания)
    * bufferingStart
    * bufferingEnd
    * error

* [ ] необходимо хранение информации о текущем файле/потоке
    * длительность
    * текущее время
    * ширина потока
    * высота потока

Функционал
* [ ] проигрывание файла(учитывать hls и DRM)
* [ ] остановка проигрывания
* [ ] пауза/продорлжение
* [ ] перемотка вперед/назад
* [ ] установка текущего времени проигрывания
* [ ] работа с субтитрами **необходимо разбить**
* [ ] работа с аудиодорожками **необходимо разбить**


### Плееры:

1. [VLC](https://ru.wikipedia.org/wiki/VLC), [browser plugin](https://wiki.videolan.org/Documentation:WebPlugin/)

### live streem

```JSON
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
```