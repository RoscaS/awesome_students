<template>
  <i :class="`fa-fw fa fa-${fa}`"></i>
</template>

<script>
  export default {
    props: {
      fa: {type: String},
      // weight: {type: String, default: ''}
    },
    name: 'Fa',
  }
</script>

<style scoped>

</style>
