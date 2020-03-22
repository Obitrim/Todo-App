import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import App from '@/views/App.vue';
import plugins from '@/plugins.js';
import firebaseConfig from '@/services/firebase-config.js';

Vue.config.productionTip = false;

// firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initializing Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

Vue.use(plugins);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
