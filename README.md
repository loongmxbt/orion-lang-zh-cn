# orion-lang-zh-cn

Simplified Chinese translations for Orion

### Usage
```
i18n.setLanguage('zh-CN');
```

or leave it to the orionjs.

orionjs:lang-en(default english language) does the initializations.

```js
var language = window.navigator.userLanguage || window.navigator.language;
    language = language.split('-')[0];
    i18n.setLanguage(language);
    T9n.setLanguage(language);
```

### More Info

https://github.com/orionjs/orion/blob/master/packages/lang-en/init.js
https://atmospherejs.com/anti/i18n