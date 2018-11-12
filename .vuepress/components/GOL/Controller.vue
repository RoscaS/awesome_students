<template>

  <div class="controller">
      <vs-button class="control-button"
                 color="primary"
                 type="line"
                 title="slow down"
                 icon="fast_rewind"
                 @click="send('slowDown')">
      </vs-button>
      <vs-button class="control-button"
                 :color="isRunning ? 'danger' : 'success'"
                 type="line"
                 :title="isRunning ? 'pause' : 'start'"
                 :icon="isRunning ? 'pause' : 'play_arrow'"
                 @click="send('play')">
      </vs-button>
      <vs-button class="control-button"
                 color="primary"
                 type="line"
                 icon="clear"
                 title="clear"
                 @click="send('redoSession')">
      </vs-button>
      <vs-button class="control-button"
                 color="primary"
                 type="line"
                 title="step forward"
                 icon="skip_next"
                 @click="send('nextStep')">
      </vs-button>
      <vs-button class="control-button"
                 color="primary"
                 type="line"
                 title="faster"
                 icon="fast_forward"
                 @click="send('speedUp')">
      </vs-button>
      <vs-button class="control-button"
                 color="primary"
                 type="line"
                 title="restart"
                 icon="repeat"
                 @click="send('randomSeed')">
      </vs-button>
  </div>

</template>

<script>
  export default {
    props: {
      isRunning: {
        default: false,
        type: Boolean,
      },
      mainComponent: {
        default: 'gamePage',
        type: String,
      },
    },
    methods: {
      send (event) {
        this.$emit('send', event);
      },
    },
  };
</script>

<style lang="scss" scoped>

  .controller {
    padding: 0;
    display: flex;
    flex-direction: row;

    .control-button {
      margin-right: 5px;
      /*padding-right: 5px;*/
    }
  }

</style>
