<template>
  <div class="articles" v-if="categories.length">
    <div class="post" v-for="category in categories">
      <router-link :to="category.path">
        <h3>{{category.frontmatter.title}}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Categories',
    computed: {
      categories () {
        let section = this.$page.path
        let categories = this.$site.pages.filter(x => {
          return x.path.match(new RegExp(`(${section})(?=.*html)`))
        }).sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        })
        return categories
      },
    },
  }
</script>

<style scoped>

</style>
