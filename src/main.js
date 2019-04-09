import Vue from 'vue'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)

const messages = {
  en: {
    message: 'hello',
    ...enLocale
  },
  zh: {
    message: '你好',
    ...zhLocale
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
