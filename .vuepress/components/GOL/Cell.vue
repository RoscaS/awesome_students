<template>
  <div :class="isAlive.isAlive ? 'alive' : 'dead'"
       class="cell"
       @click="reborn(true)"
       @mouseover="reborn(isMouseDown)">
  </div>
</template>

<script>
  export default {
    props: {
      statusObj: {
        default () {
          return {isAlive: false};
        },
        type: Object,
      },
      xPos: {
        default: -1,
        type: Number,
      },
      yPos: {
        default: -1,
        type: Number,
      },
      isMouseDown: {
        default: false,
        type: Boolean,
      },
    },
    data() {
      return {
        isAlive: this.statusObj,
      };
    },
    methods: {
      reborn (bool) {
        if (bool) {
          this.isAlive.isAlive = !this.isAlive.isAlive;
          this.$emit('wasUpdated', this.isAlive.isAlive);
        }
      },
    },
  };
</script>

<style>
  .cell {
    flex: 1;
    /*border-right: 1px solid #1a0707;*/
    /*border-bottom: 1px solid #1a0707;*/
    padding-bottom: 100%;
    z-index: -1;
  }

  .cell:hover {
    background-color: rgba(132, 26, 26, 0.6);
  }

  .alive {
    /*background-color: #bb4747 !important;*/

    /*background-color: rgba(0, 0, 0, 0.25) !important;*/
    background-color: rgba(41, 115, 183, 0.07) !important;
    /*transition: all .1s;*/
  }
</style>
