<template>
  <section class="wrapper">
    <div class="tabs">
      <vs-tabs vs-alignment="fixed" :vs-position="fullScreen ? 'left' : 'top'">
        <div class="tab-content" :style="contentStyle">
          <div class="image" :style="marginLeft">
            <vs-tab v-for="(i, idx) in views" :vs-label="i.title" :key="idx">
              <img :src="i.img" :class="{blur: showSongHover}">
              <div class="hover-area"
                   @mouseenter="showSongHover = true"
                   @mouseleave="showSongHover = false"
                   v-if="i.title == 'Recherche'">

                <i class="fa-2x far fa-address-card"></i>
                <i class="mouse fas fa-mouse-pointer"></i>

              </div>
              <transition name="fade">
                <div class="extra-image" v-if="showSongHover">
                  <vs-card>
                    <div slot="header"><h3>On hover:</h3></div><div>
                      <img src="https://i.imgur.com/jEEfa1R.png">
                    </div>
                  </vs-card>
                </div>
              </transition>

            </vs-tab>
          </div>
        </div>
      </vs-tabs>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'BestShopUINav',
    props: {
      fullScreen: {type: Boolean, default: false},
    },
    data: () => ({
      showSongHover: false,
      views: [
        {img: 'https://i.imgur.com/osrtnbh.png', title: 'Home'},
        {img: 'https://i.imgur.com/eCsdR08.png', title: 'Login'},
        {img: 'https://i.imgur.com/v3xpKEH.png', title: 'Support'},
        {img: 'https://i.imgur.com/wXAb6lE.png', title: 'Apropos'},
        {img: 'https://i.imgur.com/Pt3akUN.png', title: 'Recherche'},
        {img: 'https://i.imgur.com/g7FdZUg.png', title: 'Player'},
        {img: 'https://i.imgur.com/osrtnbh.png', title: 'Caddy'},
        {img: 'https://i.imgur.com/osrtnbh.png', title: 'Article'},
        {img: 'https://i.imgur.com/osrtnbh.png', title: 'Profile'},
      ],
    }),
    computed: {
      contentStyle() {
        return {
          maxHeight: (this.fullScreen ? 'auto' : '870') + 'px',
          marginTop: (this.fullScreen ? '-29' : 'auto') + 'px',
        };
      },
      marginLeft() {
        return 'margin-left:' + (this.fullScreen ? '50' : '0') + 'px';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  img {
    transition: all .5s ease;
    margin: 15px auto 0 auto;
  }

  .inner-popup {
    z-index: 1000 !important;
  }

  .hover-area {
    transition: opacity .5s ease;
    color: #46C93A;
    position: absolute;
    top: 67%;
    right: 86%;
    cursor: default;
    border-radius: 5px;
    font-weight: bold;
    padding: 10px 0 10px 10px;
    opacity: 0.3;
    &:hover {
      transition: opacity .5s ease;
      opacity: 0.1;
    }

    .mouse {
      color: black;
      position: relative;
      top: 10px;
      right: 10px;
    }
  }

  .extra-image {
    position: absolute;
    top: 35%;
    left: 32%;
  }

  .blur {
    transition: all .5s ease;
    filter: blur(5px);
  }

</style>
