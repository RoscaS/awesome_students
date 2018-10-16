<template>
  <div class="tree">
    <pre>{{drawTree}}</pre>
  </div>
</template>

<script>
  let draw_tree = require('asciitree/asciitree')

  // let tree = [1, [7, 6, [15, 4, 9]], [2, 9, 4]];

  export default {
    name: 'Tree',
    props: {
      tree: Array,
    },
    computed: {
      drawTree () {
        return draw_tree(this.tree)
      },
    },
  }
</script>

<style scoped>
  .tree {
    display: flex;
  }

  pre {
    margin-left: auto;
    margin-right: auto;
    background-color: white;
  }
</style>
