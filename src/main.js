import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//Vue.config.productionTip = false
Vue.component('app-servers',Home);
new Vue({
  el:'#app',
  render: h => h(App),
})
//.$mount('#app')
