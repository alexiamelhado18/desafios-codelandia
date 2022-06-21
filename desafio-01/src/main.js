import Vue from 'vue'
import App from './App.vue'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal, {
    origin:'top',
    distance: '50px',
    duration: 2000,
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
