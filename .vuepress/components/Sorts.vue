<template>
  <div>

    <h4>Initial tab:</h4>
    <h4>{{initialTab}}</h4>
    <br>
    <h4>After heapify:</h4>
    <h4>{{afterHeapify}}</h4>

    <br>

    <ol>
      <li class="line" v-for="i in getData">
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
    name: 'Sorts',
    data: () => ({
      initialTab: '',
      afterHeapify: '',
      dataTable: [],
      tab: [],
      len: 10,
    }),
    computed: {
      getData() {
        return this.dataTable;
      },
    },
    methods: {
      printTab() {
        console.log(this.tab);
      },

      saveCopyTable() {
        let t = [];
        this.tab.forEach(i => t.push(i));
        this.dataTable.push(t);
      },


      randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      floor(value) {
        let result = Math.floor(value);
        return result < 0 ? 0 : result;
      },
      initTab() {
        for (let i = 0; i < this.len; i++) {
          this.tab.push(this.randInt(10, 100));
        }
        this.initialTab = `${this.tab}`;
      },

      swap(tab, i, j) {
        let temp = tab[i];
        tab[i] = tab[j];
        tab[j] = temp;
      },

      heapify(tab) {
        for (let i = 1; i < this.len; i++) {
          let parent = this.floor((i - 1) / 2);
          let temp = i;

          while (tab[temp] >= tab[parent] && temp !== 0) {
            this.swap(tab, temp, parent);
            temp = parent;
            parent = this.floor((temp - 1) / 2);
          }
        }
      },

      walk(tab, i, end) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if ((tab[left] >= tab[i] || tab[right] >= tab[i]) && right < end) {
          let biggest = tab[left] > tab[right] ? left : right;
          this.swap(tab, i, biggest);
          this.walk(tab, biggest, end);
        }
      },

      heapSort(tab) {
        this.heapify(tab);

        this.afterHeapify = `${this.tab}`;

        let end = this.len - 1;

        while (end > 0) {
          this.swap(tab, 0, end);
          this.walk(tab, 0, end);
          end--;

          this.saveCopyTable();
          console.log(this.tab)
        }

      },

    },
    mounted() {
      this.initTab();
      this.heapSort(this.tab);
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

  .value-wrapper {

  }

</style>
