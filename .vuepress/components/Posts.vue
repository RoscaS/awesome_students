<template>
  <div class="posts" v-if="posts.length">
    <div class="post" v-for="post in posts">
      <router-link :to="post.path">
        <span class="post-name">
          <p>[{{getCategory(post.path)}}]: <b>{{post.frontmatter.title}}</b></p>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pages: {type: String}
  },
  computed: {
    posts() {
      let allPosts = this.$site.pages.filter(x => {
        return x.path.startsWith(`/${this.pages}/`) && x.path.endsWith('.html')
      })
      return allPosts.sort((a, b) => {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      })
    },
  },
  methods: {
    getCategory(path) {
      let cat = path.split('/')[2].replace('_', ' ')
      return cat[0].toUpperCase() + cat.slice(1, cat.length)
    }
  }
};
</script>

<style scoped>
  .post-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    line-height: 10px;
  }



</style>
