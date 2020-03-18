<template>
    <div class="card-group__item"
         :class="{itemSale: !card.sale}"
    >
        <div class="card-group__item-image">
            <img :src="card.image" alt="">
        </div>
        <div class="card-group__item-info">
            <div class="item-info__title">
                {{ card.title }}
            </div>
            <div class="item-info__order">
                <div class="item-info__order-prices" v-if="card.sale">
                    <div class="order-prices__old-price">
                        {{ card.oldprice }}
                    </div>
                    <div class="order-prices__new-price">
                        {{ card.newprice }}
                    </div>
                </div>
                <div class="button-box" v-if="card.sale">
                    <div class="loader" v-if="isLoading"></div>
                    <button class="custom-button button-order"
                            v-if="!isLoading"
                            @click="order()"
                            :class="{isBasket: isInCart}"
                            :disabled="isDisabled"
                    >
                        <i v-if="isInCart"></i> {{ isInCart ? 'В корзине' : 'Купить'}}
                    </button>
                </div>
                <div class="item-info__sale" v-else>
                    Продана на аукционе
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['card', 'sale', 'index', 'cart'],
    data() {
      return {
        isLoading: false,
        isDisabled: false
      }
    },
    computed: {
      isInCart() {
        return this.cart.includes(this.index)
      }
    },
    methods: {
      async order() {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        this.isLoading = true;

        fetch(url, {method: 'GET'})
          .then(
            async (response) => {
              response.json()
                .then((data) =>{
                  this.isLoading = false;
                  this.isDisabled = true;
                  this.cart.push(this.index);
                  console.log(data);
              });
            }
          )
          .catch(function (error) {
            console.log(error)
          });
      }
    },
    created: function () {

    }
  };
</script>

<style lang="scss" scoped>
    .card-group__item {
        flex: 0 0 280px;
        width: 100%;
        max-width: 280px;
        border: 1px solid #E1E1E1;
        padding: 1px;
        &.itemSale {
            user-select: none;
            opacity: .5;
        }
    }

    .card-group__item-image {
        & img {
            width: 100%;
        }
    }

    .card-group__item-info {
        padding: 20px 24px 24px;
    }

    .item-info__title {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 22px;
    }

    .item-info__order {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 48px;
        &-prices {
            flex: 0 0 48%;
            width: 48%;
        }
    }

    .order-prices__old-price {
        font-size: 14px;
        line-height: 1.5;
        color: #A0A0A0;
        text-decoration: line-through;
    }

    .order-prices__new-price {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
    }

    .button-box {
        flex: 0 0 48%;
        width: 48%;
    }

    .button-order {
        width: 100%;
        transition: all 400ms ease;
        & i {
            display: inline-flex;
            width: 5px;
            height: 10px;
            border-bottom: 2px solid #F4F6F9;
            border-right: 2px solid #F4F6F9;
            margin-right: 5px;
            transform: rotate(40deg);
        }
        &.isBasket {
            cursor: default;
            background: var(--button-basket);
        }
    }

    .item-info__sale {
        font-size: 16px;
        font-weight: 700;
    }
</style>
