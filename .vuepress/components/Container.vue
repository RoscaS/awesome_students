<template>

<section class="section">
  <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
      <vs-card class="card" :class="`card-${type}`">
        <span class="header">
          <span class="icon" :class="`icon-${type}`">
            <i :class="`fas ${icons[type]}`"></i>
          </span>
          <span class="title">
            {{ title[type] }}
            <span v-if="header">: {{ header }}</span>
          </span>
        </span>
        <div class="body">
          <slot></slot>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
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
    margin-top: 20px !important;
    // margin-bottom: 20px !important;
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

    .header {
      display: flex;
      align-items: center;

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
      /*font-family: 'Open Sans', sans-serif;*/
      font-size: 16px;
    }
  }
</style>
