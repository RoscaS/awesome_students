<template>
  <div class="wrapper">
    <h4 v-if="!title">{{ header }}</h4>
    <vs-card :style="setMaxWidth">
      <div slot="header" v-if="title">
        <h3>
          {{ header }}
        </h3>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </vs-card>
  </div>
</template>

<script>
  export default {
    props: {
      maxWidth: {type: String, default: '250'},
      header: {type: String},
      center: {type: String, default: "false"},
      title: {type: Boolean, default: false}
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

  .body {
    font-size: 14px !important;
  }
</style>
