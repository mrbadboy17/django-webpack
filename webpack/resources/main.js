import Vue from 'vue/dist/vue.js';
import './stylus/app.styl';

// search the component folder and register them 
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

new Vue({
  el: '#app'
})
