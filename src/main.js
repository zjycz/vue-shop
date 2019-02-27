import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://litc.pro:9999';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;

// 引入vant 
import { Tabbar, TabbarItem,Tab,Tabs,NavBar,Field,List,Button,Toast,CellGroup } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(NavBar).use(Field).use(List ).use(Button).use(Toast ).use(CellGroup);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
