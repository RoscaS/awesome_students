<template>
  <div class="wrapper">
    <h4>{{ header }}</h4>
    <vs-card :style="setMaxWidth">
      <slot></slot>
    </vs-card>
  </div>
</template>

<script>
  export default {
    props: {
      maxWidth: {type: String, default: '250'},
      header: {type: String},
    },
    name: 'Card',
    computed: {
      setMaxWidth () {
        return {
          maxWidth: this.maxWidth + 'px',
          minWidth: this.maxWidth + 'px',
        }
      },
    },
  }
</script>

<style scoped>

  .wrapper {
    margin-top: 20px;
  }

  h4 {
    margin-bottom: 20px;
  }
</style>
