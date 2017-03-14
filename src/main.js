import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import './css/style.css';

Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter(require('./router'))
new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    data: {
    	message: 'hello'
    }, 
    methods: {
    	clickBtn: function() {
    		alert('I have clicked' + this.message);
    	}
    }
});