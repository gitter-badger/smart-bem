# Реализация событий для ядра

Необходима реалитзация:
* [x] установки событий — (`pubsub.on`)
* [x] выполнения события — (`pubsub.emit`)
* [x] удаление событий (`pubsub.un`)
* [x] установки события для единичного исполнения (`pubsub.once`)

Также необходимо оценить время реализации `:namespace` для событий, а также
* [ ] выполнения события по `:namespace`
* [ ] удаления всех событий по `:namespace`

Пример:
```javascript
modules.require('pub-sub', function (Pubsub) {
  Pubsub.on('event:namespace', cb1);
  Pubsub.on('event2:namespace', cb2);
});

Pubsub.emit(':namespace'); // должен выполниться cb1 и cb2
```
