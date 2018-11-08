<template>
  <small>
    <div v-if="$page.frontmatter.date">
      Publié le {{ getDate(frontmatter.date) }} par
      <a href="#">{{ author(frontmatter.author) }}</a>
    </div>
  </small>
</template>

<script>
  import { DateTime, Settings } from 'luxon';
  import { firstNamesOnly } from '../utils';

  Settings.defaultLocale = 'fr';

  export default {
    name: 'ArticleData',
    props: {
      frontmatter: {type: Object},
    },
    methods: {
      getDate (date) {
        return DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);
      },
      author (author) {
        return firstNamesOnly(author);
      },
    },
  };
</script>

<style scoped>

</style>
