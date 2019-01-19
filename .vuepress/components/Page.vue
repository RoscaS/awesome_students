<template>
  <div class="print-page">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Page',
  };
</script>

<style lang="scss" scoped>

  .print-page {
    height: 297mm;
    width: 210mm;
    border: 1px solid black;
    box-shadow: 10px 10px 43px -1px rgba(0,0,0,0.38);

  }

</style>
