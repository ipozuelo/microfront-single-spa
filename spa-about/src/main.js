import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import axios from "axios"; 



Vue.use(VueI18n);

let esTranslations = {}
axios
  .get("http://localhost:3000/i18n/es.json") 
  .then((response) => {
    esTranslations = response.data
  })
  .catch((error) => {
    console.error("Error al cargar las traducciones:", error);
  });

let enTranslations = {}
axios
  .get("http://localhost:3000/i18n/es.json") 
  .then(response => response.json()).then(msg =>{
    enTranslations = msg

  }) 
  .catch((error) => {
    console.error("Error al cargar las traducciones:", error);
  });

const i18n = new VueI18n({
  legacy: false,
  locale: localStorage.getItem("languaje"),
  fallbackLocale: "es",
  messages: {
    esTranslations,
    enTranslations
  },
});

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
