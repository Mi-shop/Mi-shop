import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import VueLazyload from 'vue-lazyload'
import loading from '../static/images/loading.gif'
 
Vue.use(VueLazyload)
 
// or with options
Vue.use(VueLazyload, {
  // error: 'dist/error.png',
  loading: '../static/images/loading.gif'
})
 
Vue.config.productionTip = false
new Vue({
  components: {
    App
  },
  template: '<App />'
}).$mount('#app')



// new Vue({
//   render: h => h(App),
// }).$mount('#app')
