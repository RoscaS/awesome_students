<template>
  <div class="spoiler">
    <div class="open">
      <Tags class="tags" :tag="tag" :title="title" @open="show()"/>
      <VueSlideToggle :open="open" :duration="1000">
        <div class="tags-content">
          <slot></slot>
        </div>
        <Tags class="tags" :tag="tag" :title="title" :close="true" @open="show()"/>
      </VueSlideToggle>
    </div>
  </div>
</template>

<script>
  import { VueSlideToggle } from 'vue-slide-toggle'
  import Tags from './SpoilerTags'

  export default {
    name: 'Spoiler',
    components: {VueSlideToggle, Tags},
    props: {
      tag: {type: String, default: "spoiler"},
    },
    data: () => ({
      open: false,
      title: 'Cliquez pour afficher',
    }),
    methods: {
      show () {
        this.open = !this.open;
        this.title = this.open
                     ? 'Cliquez pour cacher'
                     : 'Cliquez pour afficher'
      },
    },
  }
</script>

<style scoped>
  .tags-content {
    padding-left: 30px;
    margin-left: 10px;
    border-left: 2px dashed rgba(193, 193, 193, 0.33);

  }

  .spoiler {
    padding-top: 20px;
    padding-bottom: 20px;
  }


</style>
