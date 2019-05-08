<template>

<section class="section">
<!--  <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">-->
<!--    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">-->

  <div class="card" :class="`card-${type}`">
    <span class="header">
      <span class="icon" :class="`icon-${type}`">
        <i :class="`fas ${icons[type]}`"></i>
      </span>
      <span class="title">
        {{ title[type] }}
      </span>
      <span v-if="header">
        : {{ header }}
      </span>
    </span>
    <div class="body">
      <slot></slot>
    </div>
  </div>

</section>

</template>

<script>
  export default {
    props: {
      type: {type: String, default: 'info'},
      header: {type: String},
    },
    name: 'Container',
    data: () => ({
      icons: {
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle',
        danger: 'fa-exclamation-triangle',
      },
      title: {
        info: 'Info',
        warning: 'Important',
        danger: 'Attention',
      }
    }),
  }
</script>

<style lang="scss" scoped>
  @import "../theme/styles/config";

  .section {
    margin-top: 30px !important;
    margin-bottom: 30px !important;
  }

  .card-info {
    background-color: #F3F5F7;
    border-left: 8px solid $isInfo;
  }
  .icon-info {
    color: $isInfo;
  }
  .card-warning {
    background-color: #FFF7D0;
    border-left: 8px solid $isWarning;
  }
  .icon-warning {
    color: $isWarning;
  }
  .card-danger {
    background-color: #FFE6E6;
    border-left: 8px solid $isDanger;
  }
  .icon-danger {
    color: $isDanger;
  }

  .card {
    border-radius: 0;
    padding: 10px;
    box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);

    .header {
      display: flex;
      align-items: center;
      margin-left: 10px;

      .icon {
        font-size: 25px;
      }

      .title {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        margin-left: 8px;
      }
    }

    .body {
      margin-top: 10px;
      margin-left: 10px;
      margin-bottom: 5px;

      /*font-family: 'Open Sans', sans-serif;*/
      font-size: 16px;
    }
  }
</style>
