<template>
    <div class="header">
        <div class="container">
            <div class="header-content">
                <div class="header-content__nav">
                    <div class="header-content__logo">
                        <img src="img/logo.png" alt="">
                    </div>
                    <div class="header-content__nav-menu">
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
                <div class="header-content__search">
                    <form>
                        <div class="header-content__search-input">
                            <input type="search" id="search" placeholder="Поиск по названию картины">
                        </div>
                        <div class="button-box">
                            <button type="submit" class="custom-button button-search">
                                Найти
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  };
</script>

<style lang="scss">
    .header {
        border: 1px solid #E1E1E1;
        padding: 24px 0;
    }
    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__nav {
            display: flex;
            align-items: center;
        }
    }
    .header-content__logo {
        width: 48px;
        height: 48px;
        margin-right: 48px;
        & img {
            width: 100%;
        }
    }
    .header-content__nav-menu {
        display: flex;
        align-items: center;
    }
    .nav-menu__item {
        font-size: 14px;
        line-height: 1;
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
    .header-content__search {
        & form {
            overflow: hidden;
            display: flex;
            align-items: stretch;
        }
    }
    .header-content__search-input {
        & input {
            font-size: 14px;
            line-height: 1;
            color: #9F9F9F;
            outline: none;
            border: 1px solid #E1E1E1;
            padding: 13px 20px 14px 16px;
            background: none;
            transition: all 400ms ease;
            &:focus {
                color: #343030;
                border: 1px solid #B5B5B5;
            }
        }
    }
    .button-search {
        min-width: 122px;
    }
</style>