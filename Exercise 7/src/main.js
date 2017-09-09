import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    servers: [
      {id: 1, status: 'Normal'},
      {id: 2, status: 'Critical'},
      {id: 3, status: 'Unknown'},
      {id: 4, status: 'Normal'},
      {id: 5, status: 'Critical'}
    ],
    current: 1
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
