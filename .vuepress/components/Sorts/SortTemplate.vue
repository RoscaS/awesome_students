<template>
  <div>
    <h2>HeapSort:</h2>
    <ol>
      <li class="line" v-for="i in iterations">
        <div class="" v-for="(j, idx) in i">
          <span class="value good" v-if="i[idx+1] > i[idx]">{{ i[idx] }}</span>
          <span class="value bad" v-else>{{ i[idx] }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>

  export default {
    name: 'SortTemplate',
    props: {
      tab: {type: Array},
    },
    data: () => ({
      iterationLogs: [],
    }),
    computed: {
      iterations() { return this.iterationLogs; },
    },
    methods: {
      logTab() {
        this.iterations.push(this.$parent.cloneTab(this.tab));
      }
    },
    mounted() {
      this.logTab();
      this.$parent.swap(this.tab, 0, 1);
      this.logTab();
    },
  };
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  .line {
    font-family: 'Roboto Mono', monospace;
    font-size: 22px;
    display: flex;
    flex-direction: row;

    .value {
      width: 10px !important;
      padding-left: 10px;
      padding-right: 10px;
      border: 1px solid lightgray;
      margin: 0 auto 0 auto !important;

      &.good {
        color: #3eaf7c;
      }

      &.bad {
        color: #F92672;
      }
    }
  }

</style>
