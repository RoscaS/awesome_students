<template>
  <div>
    <div class="theme-container"
         :class="pageClasses"
         @touchstart="onTouchStart"
         @touchend="onTouchEnd">

      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

      <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

      <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
        <slot name="sidebar-top" slot="top"/>
        <slot name="sidebar-bottom" slot="bottom"/>
      </Sidebar>

      <div class="custom-layout" v-if="$page.frontmatter.layout">
        <component :is="$page.frontmatter.layout"/>
      </div>

      <Home v-else-if="$page.frontmatter.home"/>


      <Page v-else :sidebar-items="sidebarItems">

        <slot name="page-top" slot="top"/>
        <slot name="page-bottom" slot="bottom"/>
      </Page>

      <SWUpdatePopup :updateEvent="swUpdateEvent"/>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import nprogress from 'nprogress';
  import Home from './Home.vue';
  import Navbar from './Navbar.vue';
  import Page from './Page.vue';
  import Sidebar from './Sidebar.vue';
  import SWUpdatePopup from './SWUpdatePopup.vue';
  import { resolveSidebarItems } from './util';

  export default {
    components: {
      Home, Page, Sidebar, Navbar, SWUpdatePopup,
    },

    data() {
      return {
        isSidebarOpen: false,
        swUpdateEvent: null,
        GOL: false,
      };
    },

    computed: {
      shouldShowNavbar() {
        this.checkP2();
        const {themeConfig} = this.$site;
        const {frontmatter} = this.$page;
        if (frontmatter.navbar === false || themeConfig.navbar === false) {
          return false;
        }
        return (
          this.$title ||
          themeConfig.logo ||
          themeConfig.repo ||
          themeConfig.nav ||
          this.$themeLocaleConfig.nav
        );
      },

      shouldShowSidebar() {
        const {frontmatter} = this.$page;
        return (
          !frontmatter.layout &&
          !frontmatter.home &&
          frontmatter.sidebar !== false &&
          this.sidebarItems.length
        );
      },

      sidebarItems() {
        return resolveSidebarItems(
          this.$page,
          this.$route,
          this.$site,
          this.$localePath,
        );
      },

      pageClasses() {
        const userPageClass = this.$page.frontmatter.pageClass;
        return [
          {
            'no-navbar': !this.shouldShowNavbar,
            'sidebar-open': this.isSidebarOpen,
            'no-sidebar': !this.shouldShowSidebar,
          },
          userPageClass,
        ];
      },
    },

    mounted() {

      window.addEventListener('scroll', this.onScroll);

      // configure progress bar
      nprogress.configure({showSpinner: false});

      this.$router.beforeEach((to, from, next) => {
        if (to.path !== from.path && !Vue.component(to.name)) {
          nprogress.start();
        }
        next();
      });

      this.$router.afterEach(() => {
        nprogress.done();
        this.isSidebarOpen = false;
      });

      this.$on('sw-updated', this.onSWUpdated);
    },

    methods: {

      checkP2() {
        this.GOL = (this.$page.path === '/projets/p2/');
      },


      toggleSidebar(to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
      },

      // side swipe
      onTouchStart(e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY,
        };
      },

      onTouchEnd(e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x;
        const dy = e.changedTouches[0].clientY - this.touchStart.y;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true);
          } else {
            this.toggleSidebar(false);
          }
        }
      },

      onSWUpdated(e) {
        this.swUpdateEvent = e;
      },
    },
  };
</script>

<style lang="scss">
  .custom-fade-enter-active, .custom-fade-leave-active {
    transition: opacity 1s;
    /*transition-delay: 1.5s;*/
  }

  /*transition: opacity 1s;*/
  /*}*/

  .custom-fade-enter, .custom-fade-leave-to {
    opacity: 0;
  }
</style>

<style src="prismjs/themes/prism-tomorrow.css">
</style>
<style src="./styles/theme.styl" lang="stylus"></style>
<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css";
  @import "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css";
  @import "~vuesax/dist/vuesax.css";


</style>
