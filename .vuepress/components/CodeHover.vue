<template>
  <v-popover :options="{popover: {defaultPlacement: 'top'}}" offset="16">
    <button class="tooltip-target b3">Click me</button>
    <template slot="popover">
      <div class="popover-inner">
        <slot></slot>
      </div>
    </template>
  </v-popover>
</template>

<script>
  export default {
    name: 'CodeHover',
    data: () => ({
      msg: 'hihihi',
      isEnabled: false,
    }),
  };
</script>

<style lang="scss" scoped>
  .tooltip {
    // ...

    &.popover {
      $color: #f9f9f9;

      .popover-inner {
        background: $color;
        color: black;
        padding: 0 !important;
        border-radius: 5px;
        box-shadow: 10px 10px 37px 3px rgba(0,0,0,0.56) !important;
        transform: scale(.8);
        z-index: 10000 !important;
      }

      .popover-arrow {
        border-color: $color;
      }
    }
  }


  .tooltip {
    display: block !important;
    z-index: 10;
  }

  .tooltip .tooltip-inner {
    background: rgba(0, 112, 183, 0.91);
    color: white;
    padding: 5px 10px 5px;
    max-width: 220px;
  }

  .tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-color: rgba(0, 112, 183, 0.91);
    position: absolute;
    margin: 5px;
    z-index: 1;
  }

  .tooltip[x-placement^="top"] {
    margin-bottom: 5px;
  }

  .tooltip[x-placement^="top"] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip[x-placement^="bottom"] {
    margin-top: 5px;
  }

  .tooltip[x-placement^="bottom"] .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip[x-placement^="right"] {
    margin-left: 5px;
  }

  .tooltip[x-placement^="right"] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip[x-placement^="left"] {
    margin-right: 5px;
  }

  .tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip.popover .popover-inner {
    background: #f9f9f9;
    color: black;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(black, .1);
  }

  .tooltip.popover .popover-arrow {
    border-color: #f9f9f9;
  }

  .tooltip[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  .tooltip[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
</style>
