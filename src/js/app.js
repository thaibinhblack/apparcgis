// Import Vue
import Vue from 'vue';
import store from '../store/store.js'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// set default config
VueCookies.config('7d')

// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');
// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles

import '../css/app.css';

// Import App Component
import App from '../components/app.vue';
import * as firebase from 'firebase'

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);
const firebaseConfig = {
  apiKey: "AIzaSyBfd4mIJqjuwYVai39tf9bbBzTerGdv2KA",
  authDomain: "htqlcx.firebaseapp.com",
  databaseURL: "https://htqlcx.firebaseio.com",
  projectId: "htqlcx",
  storageBucket: "htqlcx.appspot.com",
  messagingSenderId: "1039388797015",
  appId: "1:1039388797015:web:80a2e0089db4baf1c51b12",
  measurementId: "G-SWSD7K3YF4"
};

firebase.initializeApp(firebaseConfig)
// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
  // Register App Component
  components: {
    app: App
  },
});