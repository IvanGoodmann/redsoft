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
        oldPrice: '3000000',
        newPrice: '2000000',
        image: 'img/card-img_01.png'
      },
      {
        title: '«Тайная вечеря» Леонардо да Винчи',
        oldPrice: '1000000',
        newPrice: '2000000',
        image: '@/img/card-img_01.jpg'
      },
      {
        title: '«Сотворение Адама» Микеланджело',
        oldPrice: '1000000',
        newPrice: '2000000',
        image: '@/img/card-img_01.jpg'
      },
      {
        title: '«Урок анатомии» Рембрандт ',
        oldPrice: '1000000',
        newPrice: '2000000',
        image: '@/img/card-img_01.jpg'
      },
    ]
  },
});
