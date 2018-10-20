<template>
  <small>
    <div v-if="$page.frontmatter.date">
      Publié le {{ getDate(frontmatter.date) }}
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
      getDate (date) {
        return DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)
      },
      formatName (name) {
        return name[0].toUpperCase() + name.slice(1, name.length)
      }
    },
  }
</script>

<style scoped>

</style>
