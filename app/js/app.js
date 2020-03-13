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
    contentTitle: 'Картины эпохи Возрождения',
    cards: [
      {
        title: '«Рождение Венеры» Сандро Боттичелли',
        oldprice: '3000000 $',
        newprice: '2000000 $',
        image: 'img/card-img__01.png'
      },
      {
        title: '«Тайная вечеря» Леонардо да Винчи',
        newprice: '2000000 $',
        image: 'img/card-img__02.png'
      },
      {
        title: '«Сотворение Адама» Микеланджело',
        oldprice: '1000000 $',
        newprice: '2000000 $',
        image: 'img/card-img__03.png'
      },
      {
        title: '«Урок анатомии» Рембрандт ',
        oldprice: '1000000 $',
        newprice: '2000000 $',
        image: 'img/card-img__04.png'
      },
    ]
  },

});
