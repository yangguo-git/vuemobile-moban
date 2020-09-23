import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './config/rem'
import { getHttp, postHttp,uploadImg} from './http/index'
import _ from 'lodash'
Vue.config.productionTip = false;
// import VueCookies from 'vue-cookies'
// Vue.use(VueCookies)

// 引入阿里字体样式文件(自己下载即可)
import '../src/styles/index.css'

Vue.prototype.$get = getHttp;
Vue.prototype.$post = postHttp;
Vue.prototype.$postImg = uploadImg;
Vue.prototype.$lodash=_;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
