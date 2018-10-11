<template>
  <div class="columns-bloc">
    <div class="column left" :style="leftWidth">
      <slot name="left">

      </slot>
    </div>
    <div class="spacer" :class="spacerClass"></div>
    <div class="column right" :style="rightWidth+rightVAlign">
      <slot name="right" >

      </slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Col',
    props: {
      spacer: {default: "1"},
      proportions: {type: String, default: "5/5"},
      vAlign: {default: 0},
    },
    computed: {
      spacerClass() {
        switch (this.spacer) {
          case ("0"):
            return "spacer-size-0";
          case ("1"):
            return "spacer-size-1";
          case ("2"):
            return "spacer-size-2";
          case ("3"):
            return "spacer-size-3";
        }
      },

      listProportions() {
        return this.proportions.split("/")
      },
      leftWidth() {
        let left = parseInt(this.listProportions[0])*10;
        return `width: ${left}vw !important;`;
      },
      rightWidth() {
        let right = parseInt(this.listProportions)[1]*10;
        return `width: ${right}vw !important;`;
      },
      rightVAlign() {
        console.log(this.vAlign)
        return `margin-top: ${this.vAlign}px;`;
      }
    },
  }
</script>

<style scoped>
  .columns-bloc {
    /*padding: 10px 0 10px;*/
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 1150px){
    .columns-bloc {
      flex-direction: column;
    }
  }
  @media (max-width: 650px){
    .columns-bloc {
      flex-direction: column;
    }
  }
  @media (max-width: 720px){
    .columns-bloc {
      flex-direction: row;
    }
  }
  @media (max-width: 650px){
    .columns-bloc {
      flex-direction: column;
    }
  }


  .column.left {
    /*width: 50vw;*/

    padding-top: 16px !important;
  }

  @media (max-width: 1150px){
    .column {
      width: auto;
    }
  }
  @media (max-width: 650px){
    .column {
      width: auto;
    }
  }
  @media (max-width: 720px){
    .column {
      /*width: 50vw;*/
    }
  }
  @media (max-width: 650px){
    .column {
      width: auto;
    }
  }


  .column.right {
    /*width: 50vw;*/
    padding-top: 16px !important;
  }

  @media (max-width: 1150px){
    .column {
      width: auto;
    }
  }
  @media (max-width: 650px){
    .column {
      width: auto;
    }
  }
  @media (max-width: 720px){
    .column {
      /*width: 50vw;*/
    }
  }
  @media (max-width: 650px){
    .column {
      width: auto;
    }
  }




  @media (max-width: 720px){
    .spacer {
      width: 20px !important;
    }
  }


  .spacer-size-1 {
    width: 0;
  }
  .spacer-size-1 {
    width: 20px;
  }
  .spacer-size-2 {
    width: 50px;
  }
  .spacer-size-3 {
    width: 100px;
  }



</style>
