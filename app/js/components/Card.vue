<template>
    <div class="card-group__item">
        <div class="card-group__item-image">
            <img :src="image" alt="">
        </div>
        <div class="card-group__item-info">
            <div class="item-info__title">
              {{title}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['title', 'image', 'oldPrice', 'newPrice'],
    data() {
      return {

      }
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
    }
    .card-group__item-image {
        & img {
            width: 100%;
        }
    }
    .card-group__item-info {
        padding: 20px 24px 24px;
    }
</style>
