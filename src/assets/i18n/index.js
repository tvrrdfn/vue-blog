import Vue from 'vue';
import VueI18n from 'vue-i18n';
import cn from './zh-CN.json';
import en from './en-US.json';
import ja from './ja-JP.json';

const locales = {
	'zh_CN': cn,
	'en_US': en,
	'ja_JP': ja
}

Vue.use(VueI18n);


Vue.prototype.$locale = {
  change (lang) {
    Vue.config.lang = lang
  },
  current () {
    return Vue.config.lang
  }
}

// set lang
var localStorageLan = localStorage.getItem('DATADECK_LANG_SETTING');

Vue.config.lang = localStorageLan;
Vue.config.fallbackLang = 'en_US';

// set locales
// Object.keys(locales).forEach(function (lang) {
//   Vue.locale(lang, locales[lang])
// })

