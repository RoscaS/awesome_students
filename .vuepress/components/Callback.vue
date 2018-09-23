<template>

</template>

<script>
  export default {
    name: 'callback',
    data: () => ({}),
    mounted () {
      this.$auth.handleAuthentication().then( () => {
        this.$router.push('/')
      })
    },
  }
</script>


<style scoped>
</style>
