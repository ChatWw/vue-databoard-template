import Vue from './va'
import App from './App'
import router from './router'
import store from './store'

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
