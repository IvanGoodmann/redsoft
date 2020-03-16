define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    template: '<div class="footer"><div class="container"><div class="footer-content"><div class="footer-content__nav"><div class="header-content__logo"><img src="img/logo-footer.png" alt=""></div><div class="footer-content__nav-menu"><div class="nav-menu__item">Каталог</div><div class="nav-menu__item">Доставка</div><div class="nav-menu__item">Оплата</div><div class="nav-menu__item">Контакты</div><div class="nav-menu__item">О галерее</div></div></div><div class="footer-content__contacts"><div class="footer-content__contacts-item"><i><img src="img/phone.png" alt=""></i><span>+7 (495) 555-55-55</span></div><div class="footer-content__contacts-item"><i><img src="img/address.png" alt=""></i><span>г. Екатеринбург ул. Генеральская, 3</span></div></div></div></div></div>',

    beforeCreate() {
      loadCss({
        content: '.footer{padding:24px 0;background:#ECEAEA}.footer-content{display:flex;align-items:center;justify-content:space-between}.footer-content__nav{display:flex;align-items:center}.footer-content__logo{width:48px;height:48px;margin-right:48px}.footer-content__logo img{width:100%}.footer-content__nav-menu{display:flex;align-items:center}.nav-menu__item{font-size:14px;line-height:1;color:#555555;cursor:pointer;margin-right:48px;transition:all 400ms ease}.nav-menu__item:last-of-type{margin-right:0}.nav-menu__item:hover{color:#776763}.footer-content__contacts{display:flex;align-items:center}.footer-content__contacts-item{display:flex;align-items:center;margin-left:50px}.footer-content__contacts-item i{display:flex;align-items:center;width:14px;margin-right:10px}.footer-content__contacts-item i img{width:100%}.footer-content__contacts-item span{font-size:14px}'
      });
    },

    data() {
      return {};
    }

  };
  _exports.default = _default;
});