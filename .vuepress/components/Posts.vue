<template>
  <div class="posts" v-if="posts.length">
    <div class="post" v-for="post in posts">
      <router-link :to="post.path">
        <p>{{post.frontmatter.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        }).reverse();
      return posts;
    }
  }
};
</script>

<style scoped>

</style>
