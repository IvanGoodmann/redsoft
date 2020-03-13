define(["vue", "./components/HeaderGroup", "./components/Card", "./components/FooterGroup"], function (_vue, _HeaderGroup, _Card, _FooterGroup) {
  "use strict";

  _vue = _interopRequireDefault(_vue);
  _HeaderGroup = _interopRequireDefault(_HeaderGroup);
  _Card = _interopRequireDefault(_Card);
  _FooterGroup = _interopRequireDefault(_FooterGroup);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var app = new _vue.default({
    el: '#app',
    components: {
      Headergroup: _HeaderGroup.default,
      Card: _Card.default,
      Footergroup: _FooterGroup.default
    },
    data: {
      contentTitle: 'Картины эпохи Возрождения',
      cards: [{
        title: '«Рождение Венеры» Сандро Боттичелли',
        oldprice: '3000000 $',
        newprice: '2000000 $',
        image: 'img/card-img__01.png'
      }, {
        title: '«Тайная вечеря» Леонардо да Винчи',
        newprice: '2000000 $',
        image: 'img/card-img__02.png'
      }, {
        title: '«Сотворение Адама» Микеланджело',
        oldprice: '1000000 $',
        newprice: '2000000 $',
        image: 'img/card-img__03.png'
      }, {
        title: '«Урок анатомии» Рембрандт ',
        oldprice: '1000000 $',
        newprice: '2000000 $',
        image: 'img/card-img__04.png'
      }]
    }
  });
});