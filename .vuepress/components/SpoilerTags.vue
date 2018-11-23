<template>
  <div class="tags" :title="title" @click="$emit('open')">
    <i class="fas fa-fw chevron fa-chevron-left"></i>
    <span class="inside close" v-if="close">/</span>
    <span class="inside text">{{tag}}</span>
    <i class="fas fa-fw chevron fa-chevron-right"></i>
  </div>
</template>

<script>
  export default {
    name: 'Tags',
    props: {
      close: Boolean,
      title: String,
      tag: String
    },
  }
</script>

<style scoped>
  .tags {
    color: #3eaf7c;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 5px;
    user-select: none;

    cursor: pointer;
  }

  .tags:first-child {
    display: inline;
  }

  .chevron {
    color: #a9a9a9;
  }

  .close {
    color: #a9a9a9;
    position: relative;
    left: -5px;
    padding-right: 5px;
  }

  .inside {
    font-weight: bold;
    font-size: 25px;
    margin: 0 -10px 0 -10px;
  }


</style>
