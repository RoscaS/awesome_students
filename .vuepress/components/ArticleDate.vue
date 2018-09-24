<template>
  <small>
    <div v-if="$page.frontmatter.date">
      Publié le {{ formatDate(frontmatter.date) }}
      par
      <a href="#">{{ formatName(frontmatter.author) }}</a>
    </div>
  </small>
</template>

<script>
  import { DateTime, Settings } from "luxon";
  Settings.defaultLocale = "fr";

  export default {
    name: 'ArticleMeta',
    props: {
      frontmatter: {type: Object}
    },
    methods: {
      formatDate (date) {
        console.log(this.frontmatter)
        let split = date.split('-')
        let day = parseInt(split[2].split('T')[0])
        let f = {month: 'long', day: 'numeric', year: 'numeric'};
        let _date = DateTime.local(parseInt(split[0]), parseInt(split[1]), day, 12, 0)
        return _date.toLocaleString(f)
      },
      formatName (name) {
        return name[0].toUpperCase() + name.slice(1, name.length)
      }
    },
  }
</script>

<style scoped>

</style>
