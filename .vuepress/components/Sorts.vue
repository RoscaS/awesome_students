<template>
  <HeapSort :tab="tab"/>
</template>

<script>


  import HeapSort from './Sorts/HeapSort';
  export default {
    name: 'Sorts',
    components: {HeapSort},
    props: {
      size: {type: Number, default: 10}
    },
    data: () => ({

    }),
    computed: {
      tab() {
        return this.randomTab();
      }
    },
    methods: {
      randomTab() {
        let a = [...Array(this.size).keys()];
        return a.map(i => this.randInt(10, 100));
      },
      cloneTab(tab) {
        return tab.slice(0);
      },
      randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      floor(value) {
        let result = Math.floor(value);
        return result < 0 ? 0 : result;
      },
      swap(tab, i, j) {
        let temp = tab[i];
        tab[i] = tab[j];
        tab[j] = temp;
      },
    },
    mounted() {

    },
  };
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');



  .value-wrapper {

  }

</style>
