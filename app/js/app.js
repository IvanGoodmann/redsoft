import Vue from 'vue';
import Headergroup from './components/HeaderGroup';
import Card from './components/Card';
import Footergroup from './components/FooterGroup';

var app = new Vue({
  el: '#app',
  components: {
    Headergroup,
    Card,
    Footergroup
  },
  data: {
    contentTitle: 'Картины эпохи Возрождения'
  },
});