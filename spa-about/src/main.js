import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import axios from "axios";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "es",
  fallbackLocale: "en",
});

export function loadLanguageAsync(lang) {
  return axios
    .get(`http://localhost:3000/i18n/${lang}.json`)
    .then((response) => {
      let msgs = response.data;
      i18n.setLocaleMessage(lang, msgs);
    });
}

window.onload = loadLanguageAsync(localStorage.getItem("languaje"));

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
