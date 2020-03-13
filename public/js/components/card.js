define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    template: '<div class="card-group__item"><div class="card-group__item-image"><img :src="image" alt=""></div><div class="card-group__item-info"><div class="item-info__title">{{ title }}</div><div class="item-info__order"><div class="item-info__order-prices"><div class="order-prices__old-price">{{ oldprice }}</div><div class="order-prices__new-price">{{ newprice }}</div></div><div class="button-box"><button class="custom-button button-order" @click="order()">{{ orderButton }}</button></div></div></div></div>',

    beforeCreate() {
      loadCss({
        content: '.card-group__item{flex:0 0 280px;width:100%;max-width:280px;border:1px solid #E1E1E1;padding:1px}.card-group__item-image img{width:100%}.card-group__item-info{padding:20px 24px 24px}.item-info__title{font-size:18px;line-height:1.5;margin-bottom:22px}.item-info__order{display:flex;align-items:center}.item-info__order-prices{flex:0 0 48%;width:48%}.order-prices__old-price{font-size:14px;line-height:1.5;color:#A0A0A0;text-decoration:line-through}.order-prices__new-price{font-size:16px;font-weight:700;line-height:1.5}.button-box{flex:0 0 48%;width:48%}.button-order{width:100%}'
      });
    },

    props: ['title', 'image', 'oldprice', 'newprice'],

    data() {
      return {};
    },

    methods: {
      order() {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        fetch(url).then(function (response) {
          if (response.status !== 200) {
            console.log(response.status);
            return;
          }

          response.json().then(function (data) {
            console.log(data);
          });
        }).catch(function (error) {
          console.log(error);
        });
      }

    },
    computed: {
      orderButton: function () {
        if (this.response) {
          return 'В корзине';
        }

        return 'Купить';
      }
    }
  };
  _exports.default = _default;
});