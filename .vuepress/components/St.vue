<template>
  <span class="element" :class="setClass">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'Style',
    props: {
      c: {type: String, default: 'r'},
    },
    computed: {
      setClass () {
        switch (this.c) {
          case ('r'):
            return 'red';
          case ('g'):
            return 'green';
          case ('b'):
            return 'blue';
          default:
            return 'red';
        }
      },
    },
  };
</script>

<style lang="stylus" scoped>
  @import '../theme/styles/config.styl'

  .red {
    color: $StyleRed !important;
  }

  .blue {
    color: $StyleBlue !important;
  }

  .green {
    color: $StyleGreen !important;
  }

  .element {
    font-weight: bold;
  }


</style>
