<template>
  <div class="wrapper">
    <div class="center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Center',
  };
</script>

<style lang="scss" scoped>

  .wrapper {
    display: flex;

    .center {
      margin-left: auto;
      margin-right: auto;
    }
  }

</style>
