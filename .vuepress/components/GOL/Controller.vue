<template>

  <div class="box">
    <div class="field has-addons has-addons-centered is-marginless">
      <!--<p class="control">-->
      <vs-button :disabled="mainComponent !== 'gamePage'"
                 color="primary"
                 type="border"
                 title="slow down"
                 @click="send('slowDown')">
        <i class="fas fa-backward"></i>
      </vs-button>
      <!--</p>-->
      <!--<p class="control">-->
      <vs-button :disabled="mainComponent !== 'gamePage'"
                 color="primary"
                 type="border"
                 :class="isRunning ? 'green' : 'red'"
                 title="play"
                 @click="send('play')">
        <i :class="isRunning ? 'fa-pause-circle' : 'fa-play-circle'"
           class="far"></i>
      </vs-button>
      <!--</p>-->
      <!--<p class="control">-->
      <vs-button :disabled="mainComponent !== 'gamePage'"
                 color="primary"
                 type="border"
                 title="clear grid"
                 @click="send('redoSession')">
        <i class="fas fa-redo"></i>
      </vs-button>
      <!--</p>-->
      <!--<p class="control">-->
      <vs-button :disabled="mainComponent !== 'gamePage'"
                 color="primary"
                 type="border"
                 title="next step"
                 @click="send('nextStep')">
        <i class="fas fa-step-forward"></i>
      </vs-button>
      <!--</p>-->
      <!--<p class="control">-->
      <vs-button :disabled="mainComponent !== 'gamePage'"
                 color="primary"
                 type="border"
                 title="speed up"
                 @click="send('speedUp')">
        <i class="fas fa-forward"></i>
      </vs-button>
      <!--</p>-->
      <!--<p class="control">-->
      <vs-button :disabled="mainComponent !== 'gamePage'"
                 color="primary"
                 type="border"
                 @click="send('randomSeed')">
          <span class="icon">
            <i class="fas fa-random"></i>
          </span>
        <b>Random</b>
      </vs-button>
      <!--</p>-->
    </div>
    <!--<div class="field has-addons has-addons-centered is-marginless">-->
    <!--<p class="control">-->
    <!--<button-->
    <!--:disabled="mainComponent !== 'gamePage'"-->
    <!--class="button"-->
    <!--@click="send('importSession')">-->
    <!--<span class="icon">-->
    <!--<i class="far fa-edit"></i>-->
    <!--</span>-->
    <!--<b>Import</b>-->
    <!--</button>-->
    <!--</p>-->
    <!--<p class="control">-->
    <!--<button-->
    <!--:disabled="mainComponent !== 'gamePage'"-->
    <!--class="button"-->
    <!--@click="send('exportSession')">-->
    <!--<span class="icon">-->
    <!--<i class="far fa-save"></i>-->
    <!--</span>-->
    <!--<b>Export</b>-->
    <!--</button>-->
    <!--</p>-->
    <!--</div>-->
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
    data() {
      return {};
    },
    methods: {
      /**
       * emits the action that is requested
       * by the client up to the App component.
       *
       * @param {string} event - the event
       */
      send: function (event) {
        this.$emit('send', event);
      },
    },
  };
</script>

<style scoped>
  .box {
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  .green {
    background-color: hsla(120, 77%, 26%, 0.6);
  }

  .red {
    background-color: hsla(0, 67%, 31%, 0.6);
  }
</style>
