import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'https://api.spotify.com/v1';
Vue.http.headers.common['Authorization'] = 'Bearer BQBnUMBjrCk9rhkap054gwezuLs2NWf9DLFwXnLAxecR6mJPjyCc7NkLRa6I2CV8c97oowm1jzAUBQ2N3EU5Zq-kEdXCp8syBIfKHMQuCIm_N2bkE7bo7ezTcKjdis0uMnOEGII5VCds';

new Vue({
  render: h => h(App)
}).$mount("#app");
