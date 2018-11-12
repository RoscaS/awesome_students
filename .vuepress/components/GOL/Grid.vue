<template>
  <div>
    <!--<app-stats :current-tick="currentTick"-->
    <!--:cell-count="cellCount"-->
    <!--:cells-alive="cellsAlive"-->
    <!--:cells-created="cellsCreated"-->
    <!--:current-speed="currentSpeed"/>-->

    <div class="grid columns"
         @mousedown="isMouseDown = true"
         @mouseup="isMouseDown = false"
         @mouseleave="isMouseDown = false">

      <div v-for="(col, indexX) in gridList"
           :key="indexX"
           class="column">
        <app-cell v-for="(isAlive, indexY) in col"
                  :key="indexY"
                  :status-obj="isAlive"
                  :x-pos="indexX"
                  :y-pos="indexY"
                  :is-mouse-down="isMouseDown"
                  @wasUpdated="updateCellCount"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Cell from './Cell.vue';

  export default {
    components: {
      'app-cell': Cell,
    },
    props: {
      message: {
        default: '',
        type: String,
      },
      importToken: {
        default: '',
        type: String,
      },
      currentSpeed: {
        default: 0,
        type: Number,
      },
    },
    data: () => ({
      width: 30,
      height: 25,

      // width: 30,
      // height: 20,

      // width: 10,  //mobile
      // height: 55, //mobile
      gridList: [],

      currentTick: 0,
      cellCount: 0,
      cellsAlive: 0,
      cellsCreated: 0,
      isMouseDown: false,
    }),
    mounted() {
    },
    created() {
      this.initHeight();
      this.cellCalc();
      this.randomSeed();

    },
    destroyed() {

    },
    computed: {},
    watch: {
      message(val) {
        if (val === 'nextStep') {
          this.update();
          this.currentTick++;
        } else if (val === 'redoSession') {
          this.reset();
        } else if (val === 'randomSeed') {
          this.randomSeed();
        } else if (val === 'importSession') {
          this.importSession();
        } else if (val === 'exportSession') {
          this.exportSession();
        }
      },
    },
    methods: {

      initHeight() {
        let width = window.innerWidth;
        // console.log(`h: ${totalHeight}\tw: ${width}`);
        if (width < 600) {
          this.height = 120;
        } else if (width < 1000) {
          this.height = 62;
        } else {
          this.height = 25;
        }
      },


      cellCalc() {
        for (let i = 0; i < this.width; i++) {
          this.gridList[i] = [];
          for (let j = 0; j < this.height; j++) {
            this.gridList[i][j] = {isAlive: false};
          }
        }
        this.cellCount = this.width * this.height;
      },
      setCell(x, y, bool) {
        if (this.gridList[x][y].isAlive != bool) {
          this.gridList[x][y].isAlive = bool;
          this.updateCellCount(bool);
        }
        // let row = this.gridList[x];
        // row.splice(y, 1, {isAlive: true});
        // this.gridList.splice(x, 1, row);
      },
      update() {
        let tempArr = [];
        for (let i = 0; i < this.width; i++) {
          tempArr[i] = [];
          for (let j = 0; j < this.height; j++) {
            let status = this.gridList[i][j].isAlive;
            let neighbours = this.getNeighbours(i, j);
            let result = false;
            // Regle 1:
            // Une cellule vivante avec moins de deux voisinnes vivantes meurt
            if (status && neighbours < 2) {
              result = false;
            }
            // Regle 2:
            // Une cellule vivante avec deux ou trois voisinnes vivantes vit la génération suivante
            if ((status && neighbours == 2) || neighbours == 3) {
              result = true;
            }
            // Regle 3:
            // Une cellule vivante avec plus de trois voisinnes vivantes meurt
            if (status && neighbours > 3) {
              result = false;
            }
            // Regle 4:
            // Une cellule morte avec exactement trois voisinnes vivantes devient vivante
            if (!status && neighbours == 3) {
              result = true;
            }
            tempArr[i][j] = result;
          }
        }
        // set contenu de gridList
        for (let i = 0; i < this.width; i++) {
          for (let j = 0; j < this.height; j++) {
            this.setCell(i, j, tempArr[i][j]);
          }
        }
      },
      /**
       * Retourne le nombre de cellules voisines pour
       * une cellule spécifique repérée par ses coordonées
       *
       * @param {number} posX - x
       * @param {number} posY - y
       * @return {number} neighbours - nombre de cellules voisines
       */
      getNeighbours(posX, posY) {
        let neighbours = 0;
        if (posX <= this.width && posY <= this.height) {
          for (let offsetX = -1; offsetX < 2; offsetX++) {
            for (let offsetY = -1; offsetY < 2; offsetY++) {
              let newX = posX + offsetX;
              let newY = posY + offsetY;

              if (
                (offsetX != 0 || offsetY != 0) &&
                newX >= 0 &&
                newX < this.width &&
                newY >= 0 &&
                newY < this.height &&
                this.gridList[posX + offsetX][posY + offsetY].isAlive == true
              ) {
                neighbours++;
              }
            }
          }
        }
        return neighbours;
      },
      reset() {
        this.currentTick = 0;
        this.cellsAlive = 0;
        this.cellsCreated = 0;
        this.gridList.forEach((col) => {
          col.forEach((cell) => {
            cell.isAlive = false;
          });
        });
      },
      randomSeed() {
        for (let i = 0; i < this.width; i++) {
          for (let j = 0; j < this.height; j++) {
            let rand = Math.random();
            if (rand < 0.2) {
              this.setCell(i, j, true);
            } else {
              this.setCell(i, j, false);
            }
          }
        }
      },
      importSession() {
        this.reset();
        let regex = /\[\d+,\d+\]/gm;
        let tempArr = this.importToken.match(regex);
        if (tempArr) {
          tempArr.forEach((element) => {
            element = element.substring(1, element.length - 1);
            let xy = element.split(',');
            this.setCell(xy[0], xy[1], true);
          });
        }
      },
      exportSession() {
        let exportToken = '';
        for (let i = 0; i < this.width; i++) {
          for (let j = 0; j < this.height; j++) {
            if (this.gridList[i][j].isAlive) {
              exportToken += '[' + i + ',' + j + ']';
            }
          }
        }
        this.$emit('exportToken', exportToken);
      },
      updateCellCount(bool) {
        if (bool) {
          this.cellsAlive++;
          this.cellsCreated++;
        } else {
          this.cellsAlive--;
        }
      },
    },
  };
</script>

<style lang="scss">

  .controller-wrapper {
    margin-top: 35px;
    /*position: relative;*/
    /*top: 75px;*/
    /*top: 23px;*/
    /*right: 20px;*/
    left: 725px;
  }

  .grid {
    /*border-top: 1px solid #1a0707;*/
    /*border-left: 1px solid #1a0707;*/
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .column {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    flex-direction: column;
  }
</style>
