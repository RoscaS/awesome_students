<template>

</template>

<script>
  export default {
    name: 'Login',
    mounted() {
      if (this.$auth.isAuthenticated()) {
        console.log('ici')
        this.$router.push('/');
      } else {
        console.log('la')
        this.$auth.login();
      }
    }
  }
</script>

<style scoped>

</style>
