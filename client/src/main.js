import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import vuetify from './plugins/vuetify';
import store from './store'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.config.productionTip = false


Vue.use(VueYouTubeEmbed)


sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
