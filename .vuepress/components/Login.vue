<template>

</template>

<script>
  export default {
    name: 'Login',
    mounted() {
      if (this.$auth.isAuthenticated()) {
        this.$router.push('/');
      } else {
        this.$auth.login();
      }
    }
  }
</script>

<style scoped>

</style>
