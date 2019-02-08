<template>
  <section class="JVM-memory">
    <vs-row>
      <vs-row>
        <span class="JVM-heap">Heap</span>
      </vs-row>
      <vs-col vs-type="flex" class="java-diag-box" vs-justify="center" vs-align="center" vs-w="7">
        <vs-col class="java-diag-box young-gen" vs-type="flex"  vs-justify="center" vs-align="center" vs-w="4">
          <span>Young Generation</span>
        </vs-col>
        <vs-col class="java-diag-box old-gen" vs-type="flex"  vs-justify="center" vs-align="center" vs-w="7">
          <span>Old <br> Generation</span>
        </vs-col>
      </vs-col>
      <vs-col vs-type="flex"  vs-justify="center" vs-align="center" vs-w="5">
        <vs-col class="java-diag-box perma" vs-type="flex"  vs-justify="center" vs-align="center" vs-w="6">
          <span>Permanent Generation</span>
        </vs-col>
        <vs-col class="java-diag-box cache" vs-type="flex"  vs-justify="center" vs-align="center" vs-w="3">
          <span >Code Cache</span>
        </vs-col>
      </vs-col>
    </vs-row>
  </section>
</template>

<script>
  export default {
    name: 'JVM',
  }
</script>

<style lang="scss" scoped>

  .JVM-heap {
    font-size: 18px;
    font-weight: bold;
    position: relative;
    left: 20px
  }

  .JVM-memory {
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .java-diag-box {
    font-size: 18px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    border: 2px solid black;
  }

  .young-gen {
    background-color: #3eaf7c;
    margin-right: 20px;
  }

  .old-gen {
    background-color: #2973b7;
  }

  .perma {
    background-color: #F92672;
    margin-right: 20px;
  }

  .cache {
    background-color: #CCCCCC;

  }
</style>
