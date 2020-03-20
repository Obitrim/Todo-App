import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import App from '@/views/App.vue';
import plugins from '@/plugins.js';

Vue.config.productionTip = false

Vue.use(plugins);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
