import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import axios from "axios"; 



Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en'
})

const loadedLanguages = []

function setI18nLanguage(lang) {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang) {
  if (loadedLanguages.includes(lang)) {
    if (i18n.locale !== lang) setI18nLanguage(lang)
    return Promise.resolve()
  }
  return axios.get(`http://localhost:3000/i18n/${lang}.json`).then(response => {
    let msgs = response.data
    loadedLanguages.push(lang)
    i18n.setLocaleMessage(lang, msgs)
    setI18nLanguage(lang)
  })
}

// Lógica para cargar el idioma dinámicamente en función de algún evento o condición en tu aplicación
export function changeLanguage(lang) {
  return loadLanguageAsync(lang)
}
window.onload = changeLanguage(localStorage.getItem("languaje"))

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    i18n,
    render(h) {
      return h(App, {
        props: {},
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
