<template>
<div class="check-box">
  <i v-if="state === 'true'" class="far fa-check-square"></i>
  <i v-else class="far fa-square"></i>
  <span :style="setTextColor">
    <slot></slot>
  </span>
</div>
</template>

<script>
  export default {
    name: 'Check',
    props: {
      state: {default: false},
    },
    computed: {
      setTextColor() {
        return `color: ${this.state === 'true' ? 'green' : ''}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .check-box {
    padding-left: 20px;
  }

  .fa-check-square {
    color: green;
  }

</style>
