<template>

  <vs-row class="wrapper" vs-type="flex" vs-justify="space-between" vs-w="12">
    <vs-col vs-type="flex" :vs-w="leftWidth" vs-sm="12">
      <div>
        <slot name="left"></slot>
      </div>
    </vs-col>
    <vs-col vs-type="flex" :vs-w="rightWidth" vs-sm="12">
      <div :style="rightVAlign">
        <slot name="right"></slot>
      </div>
    </vs-col>
  </vs-row>

</template>

<script>
  export default {
    name: 'Col',
    props: {
      proportions: {type: String, default: "6/6"},
      vAlign: {default: 0},
    },
    computed: {
      listProportions() {
        return this.proportions.split("/");
      },
      leftWidth() {
        console.log(this.listProportions[0]);
        return this.listProportions[0];
      },
      rightWidth() {
        console.log(this.listProportions[1]);
        return this.listProportions[1];
      },
      rightVAlign() {
        return `padding-top: ${this.vAlign}px;`;
      }
    },
  }
</script>

<style scoped>

  .wrapper {
    /*padding: 20px 0 20px 0;*/
  }

</style>
