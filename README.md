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

Because the language here is 'zh-CN', and will be spilited into 'zh',
so maybe you need to set the correct language in your code again.

And for T9n, the Simplified Chinese is set by `T9n.setLanguage('zh_cn')`.

Here is init of i18n example.

```js
if (Meteor.isClient) {

    // Set language zh-CN, zh_cn
    setLanguage = function() {
	var i18nLang = window.navigator.userLanguage || window.navigator.language;
	i18n.setLanguage(i18nLang);
	t9nLang = i18nLang.replace('-','_').toLowerCase();
	T9n.setLanguage(t9nLang);
    }

    Meteor.startup(function () {
	setLanguage();
    })

}
```

### More Info

https://github.com/orionjs/orion/blob/master/packages/lang-en/init.js
https://atmospherejs.com/anti/i18n
https://atmospherejs.com/softwarerero/accounts-t9n
