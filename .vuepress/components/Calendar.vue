<template>
  <v-calendar :attributes='attrs'></v-calendar>
</template>

<script>




  export default {
    name: 'Calendar',
    data: () => ({
      attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#ff8080',
          },
          dates: new Date(2018, 0, 1)
        }
      ]
    }),
  }
</script>

<style scoped>

</style>
