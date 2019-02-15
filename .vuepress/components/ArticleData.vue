<template>
  <small>
    <div v-if="$page.frontmatter.date">
      Publié le {{ getDate(frontmatter.date) }} par
      <a href="#">{{ author(frontmatter.author) }}</a>
    </div>
    <div v-if="$page.lastUpdated">
      Dernière mise à jour: {{ lastUpdated() }}
    </div>
  </small>
</template>

<script>
  import { DateTime, Settings } from 'luxon'
  import { firstNamesOnly } from '../utils'

  Settings.defaultLocale = 'fr'

  export default {
    name: 'ArticleData',
    props: {
      frontmatter: {type: Object},
    },
    methods: {
      lastUpdated() {
        let date = this.$page.lastUpdated
        return DateTime.fromMillis(date).toLocaleString(DateTime.DATETIME_MED)
      },
      getDate(date) {
        return DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)
      },
      author(author) {
        return firstNamesOnly(author)
      },
    },
  }
</script>

<style scoped>

</style>
