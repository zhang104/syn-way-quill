import HelloWorld from "./HelloWorld/index.vue";

export default {
  install(Vue, options = {}) {
    Vue.component("hello-world", HelloWorld);
  },
};
