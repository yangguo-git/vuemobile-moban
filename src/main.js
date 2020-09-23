import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入适配文件
import './remconfig/rem'
//引入请求文件
import { getHttp, postHttp,uploadImg} from './request/index'
import _ from 'lodash'
Vue.config.productionTip = false;

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入阿里字体样式文件
import '../src/styles/index.css'

Vue.prototype.$get = getHttp;
Vue.prototype.$post = postHttp;
Vue.prototype.$postImg = uploadImg;
Vue.prototype.$lodash=_;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
