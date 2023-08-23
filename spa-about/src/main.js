import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import VueI18n from 'vue-i18n';

import es from '../../i18n/es.json'
import en from '../../i18n/en.json'

Vue.use(VueI18n);



const i18n = new VueI18n({
  legacy: false,
  locale: localStorage.getItem("languaje"),
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    // Puedes agregar más idiomas según tus necesidades
  },
});




import App from './App.vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    i18n,
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecycle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          /*
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          */
        },
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
