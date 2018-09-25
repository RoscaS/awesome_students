<template>
  <div class="media-wrapper" :style="setCenter">
    <div>
      <div :class="{shadow: url}">
        <a v-if="url"
           :title="url"
           :href="url"
           target="_blank">
          <img :src="src" :style="setWidth"/>
        </a>
        <img  v-else :src="src" :style="setWidth"/>
      </div>
        <blockquote v-if="caption"
                    :style="`max-width:${width}px;`"
                    class="caption">
            {{caption}}
        </blockquote>
    </div>
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
    computed: {
      setWidth() {
        if (this.width) { return `width: ${this.width}px; `}
      },
      setCenter() {
        if (this.center === 'true') { return `justify-content: center; `}
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
    margin-top: 40px;
    margin-bottom: 20px;
  }


</style>
