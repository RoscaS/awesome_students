<template>
  <section>
    <a class="diagram" :href="link" target="_blank">
      <img :src="url" :style="setCenter" @click="popup=true">
    </a>
  </section>
</template>

<script>
  export default {
    name: 'Diagram',
    props: {
      center: {type: String, default: 'true'},
      type: {type: String, default: 'nomnoml'},
      height: {type: String, default: ''},
      url: {type: String},
      link: {type: String},
    },
    data: () => ({
      popup: false,
    }),
    computed: {
      setCenter () {
        return {
          margin: this.center === 'true' ? '0 auto 0 auto' : '',
          height: this.height ? `${this.height}px` : '',
        };
      },
    },
  };
</script>

<style lang="scss" scoped>

  .diagram {
    display: flex;
    img {
      /*box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);*/
    }
  }

  .code {
    display: none;
  }

</style>
