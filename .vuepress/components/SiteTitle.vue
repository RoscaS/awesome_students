<template>
  <h1 class="site-name">
    <i class="title-icon far fa-lambda"></i>
    <span>wsome</span>
    <i class="title-icon far fa-integral"></i>
    <span>tudents</span>
  </h1>

</template>

<script>
  export default {
    name: 'SiteTitle',
  }
</script>

<style lang="stylus" scoped>
  .site-name
    font-size 35.2px
    font-weight 600
    color $textColor
    position relative
    .title-icon
      font-size 35px
      color #3EAF7C
      &.fa-lambda
        margin-right -10px
      &.fa-integral
        margin-right -10px
        transform rotateZ(-20deg)


</style>
