import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import ListServers from './ListServers.vue'
import ServerDetails from'./ServerDetails.vue'
import Footer from './Footer.vue'

Vue.component('header-vue', Header);
Vue.component('list-servers', ListServers);
Vue.component('server-details', ServerDetails);
Vue.component('footer-vue', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
