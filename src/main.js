import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

require("firebase/firestore");
 var firebaseConfig = {
    apiKey: "AIzaSyDFBpvyvNlulcIArLo1yKT0n-duophW14c",
    authDomain: "chatapplication-5cb9d.firebaseapp.com",
    databaseURL: "https://chatapplication-5cb9d.firebaseio.com",
    projectId: "chatapplication-5cb9d",
    storageBucket: "chatapplication-5cb9d.appspot.com",
    messagingSenderId: "697251536305",
    appId: "1:697251536305:web:cc2a602ddc6d05d43af190",
    measurementId: "G-RFH2PFNG48"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();

window.db = db;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
