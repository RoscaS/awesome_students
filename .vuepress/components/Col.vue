<template>
  <div class="columns-bloc">
    <div class="column left">
      <slot name="left">

      </slot>
    </div>
    <div class="spacer" :class="spacerClass"></div>
    <div class="column right">
      <slot name="right">

      </slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Col',
    props: {
      spacer: {default: "1"}
    },
    computed: {
      spacerClass() {
        switch (this.spacer) {
          case ("1"):
            return "spacer-size-1";
          case ("2"):
            return "spacer-size-2";
          case ("3"):
            return "spacer-size-3";
        }
      },
    }
  }
</script>

<style scoped>
  .columns-bloc {
    padding: 10px 0 10px;
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


  .column {
    width: 50vw;
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
      width: 50vw;
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
    width: 20px;
  }
  .spacer-size-2 {
    width: 50px;
  }
  .spacer-size-3 {
    width: 100px;
  }



</style>
