import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';

import es from '../../i18n/es.json'
import en from '../../i18n/en.json'

import Udemy from './components/Udemy.vue'

Vue.use(VueI18n);
Vue.component('component-udemy', Udemy);

const i18n = new VueI18n({
  legacy: false,
  locale: localStorage.getItem("languaje"),
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
});


Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    i18n,
    render(h) {
      return h(App, {
        props: {
        },
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
