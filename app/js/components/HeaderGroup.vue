<template>
    <div class="header">
        <div class="container">
            <div class="header-content">
                <div class="header-content__nav">
                    <div class="header-content__logo">
                        <img src="img/logo.png" alt="">
                    </div>
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
        &__nav {
            display: flex;
            align-items: center;
        }
    }
    .header-content__logo {
        width: 48px;
        margin-right: 48px;
    }
</style>