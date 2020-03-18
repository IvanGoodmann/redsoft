import Vue from 'vue';
import Headergroup from './components/HeaderGroup';
import Card from './components/Card';
import Footergroup from './components/FooterGroup';

const vm = new Vue({
  el: '#app',
  components: {
    Headergroup,
    Card,
    Footergroup
  },
  data: {
    contentTitle: 'Картины эпохи Возрождения',
    cards: [
      {
        sale: true,
        title: '«Рождение Венеры» Сандро Боттичелли',
        oldprice: '3000000 $',
        newprice: '2000000 $',
        image: 'img/card-img__01.png'
      },
      {
        sale: true,
        title: '«Тайная вечеря» Леонардо да Винчи',
        newprice: '2000000 $',
        image: 'img/card-img__02.png'
      },
      {
        sale: true,
        title: '«Сотворение Адама» Микеланджело',
        oldprice: '1000000 $',
        newprice: '2000000 $',
        image: 'img/card-img__03.png'
      },
      {
        sale: false,
        title: '«Урок анатомии» Рембрандт ',
        oldprice: '1000000 $',
        newprice: '2000000 $',
        image: 'img/card-img__04.png'
      },
    ],
    cart: []
  },
  watch: {
    "cart": {
      handler: function(cart) {
        localStorage.setItem('cart', JSON.stringify(cart))
      },
      deep: true
    }
  },
  created() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && Array.isArray(cart)) {
      this.cart = cart
    }
  }
});
