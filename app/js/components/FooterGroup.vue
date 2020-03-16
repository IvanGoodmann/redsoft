<template>
    <div class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-content__nav">
                    <div class="header-content__logo">
                        <img src="img/logo-footer.png" alt="">
                    </div>
                    <div class="footer-content__nav-menu">
                        <div class="nav-menu__item">
                            Каталог
                        </div>
                        <div class="nav-menu__item">
                            Доставка
                        </div>
                        <div class="nav-menu__item">
                            Оплата
                        </div>
                        <div class="nav-menu__item">
                            Контакты
                        </div>
                        <div class="nav-menu__item">
                            О галерее
                        </div>
                    </div>
                </div>
                <div class="footer-content__contacts">
                    <div class="footer-content__contacts-item">
                        <i><img src="img/phone.png" alt=""></i>
                        <span>+7 (495) 555-55-55</span>
                    </div>
                    <div class="footer-content__contacts-item">
                        <i><img src="img/address.png" alt=""></i>
                        <span>г. Екатеринбург ул. Генеральская, 3</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  };
</script>

<style lang="scss">
    .footer {
        padding: 24px 0;
        background: #ECEAEA;
    }
    .footer-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__nav {
            display: flex;
            align-items: center;
        }
    }
    .footer-content__logo {
        width: 48px;
        height: 48px;
        margin-right: 48px;
        & img {
            width: 100%;
        }
    }
    .footer-content__nav-menu {
        display: flex;
        align-items: center;
    }
    .nav-menu__item {
        font-size: 14px;
        line-height: 1;
        color: #555555;
        cursor: pointer;
        margin-right: 48px;
        transition: all 400ms ease;
        &:last-of-type {
            margin-right: 0;
        }
        &:hover {
            color: #776763;
        }
    }
    .footer-content__contacts {
        display: flex;
        align-items: center;
        &-item {
            display: flex;
            align-items: center;
            margin-left: 50px;
            & i {
                display: flex;
                align-items: center;
                width: 14px;
                margin-right: 10px;
                & img {
                    width: 100%;
                }
            }
            & span {
                font-size: 14px;
            }
        }
    }
</style>