<template>
  <section class="wrapper">
    <BestShopUINav :full-screen="false"/>
    <div class="btn-wrapper">
      <div class="full-screen-btn">
        <vs-button @click="fullScreen=true" color="primary" type="flat">
          <i class="fal fa-arrows fa-2x"></i>
        </vs-button>
      </div>
    </div>
    <vs-popup fullscreen title="BestShop UI mockup" :active.sync="fullScreen">
      <BestShopUINav :full-screen="true"/>
    </vs-popup>
  </section>
</template>

<script>
  import BestShopUINav from './GenieLog/BestShopUI/BestShopUINav';

  export default {
    name: 'BestShopUI',
    components: {BestShopUINav},
    data: () => ({
      fullScreen: false,
    }),
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 30px;
  }

  .btn-wrapper {
    position: relative;
    top: -40px;
    right: -11px;

    display: flex;
    .full-screen-btn {
      margin-left: auto;
    }

  }

</style>
