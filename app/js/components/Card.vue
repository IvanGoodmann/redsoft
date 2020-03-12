<template>
    <div class="card-group__item">
        <div class="card-group__item-image">
            <img :src="" alt="">
        </div>
        <div class="card-group__item-info">
            <div class="item-info__title">
                {{cardTitle}}
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

<style lang="scss" scoped>
    .card-group__item {
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