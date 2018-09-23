<template>

</template>

<script>
  export default {
    name: 'Logout',
    mounted () {
      this.$auth.logout()
    },
  }
</script>

<style scoped>

</style>
