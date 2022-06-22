import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VueTypedJs } from 'vue-typed-js'
import VueScrollReveal from 'vue-scroll-reveal';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueTypedJs);
Vue.use(VueScrollReveal, {
  origin:'top',
  distance: '50px',
  duration: 2000
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
