<template>
  <div class="media-wrapper" :style="setCenter">
    <div>
      <div :class="{shadow: url}">
        <a v-if="url"
           :title="url"
           @click="fullScreen = true"
           target="_blank">
           <!--:href="url"-->
          <img :src="src" :style="setWidth"/>
        </a>
        <img v-else :src="src" :style="setWidth" @click="fullScreen = true"/>
      </div>
      <blockquote v-if="caption"
                  :style="`max-width:${width}px;`"
                  class="caption">
          {{caption}}
      </blockquote>
    </div>
    <vs-popup fullscreen
              :title="caption? caption : ''"
              :active.sync="fullScreen">
      <div class="full-image">
        <img :src="src" alt="">
      </div>
    </vs-popup>
  </div>
</template>

<script>
  export default {
    props: {
      src: {type: String},
      width: {type: String},
      center: {type: String},
      url: {type: String},
      caption: {type: String},
    },
    name: 'Media',
    data: () => ({
      fullScreen: false,
    }),
    computed: {
      setWidth() {
        if (this.width) { return `width: ${this.width}px; `}
      },
      setCenter() {
        return `justify-content: ${this.center === 'true' ? 'center' : 'left'}`;
        // if (this.center === 'true') { return `justify-content: center;`}
      },
    },
  }
</script>

<style scoped>

  blockquote {
    font-family: 'Roboto', sans-serif !important;
    font-style: normal;
    font-size: 12px;
  }

  .media-wrapper {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .full-image {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
  }

  .caption {
    border-left: none;
  }

  img {
    cursor: pointer;
  }


</style>
