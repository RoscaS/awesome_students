<template>
  <small>
    <div v-if="$page.frontmatter.date">Publié le {{ formatDate($page.frontmatter.date) }}
      <span v-if="$page.frontmatter.categories">par <a href="#">{{ $page.frontmatter.authors[0] }}</a></span>
    </div>
    <span v-if="$page.frontmatter.categories">
      Catégories:
      <a v-for="(category, index) in $page.frontmatter.categories" :key="index" :href="'/blog/categories/#'+formatAnchor(category)">
        {{category}}
      </a>
    </span>
    <span v-if="$page.frontmatter.tags">
      Tags:
      <a v-for="(tag, index) in $page.frontmatter.tags" :key="index" :href="'/blog/tags/#'+formatAnchor(tag)">
        {{tag}}
      </a>
    </span>
  </small>
</template>

<script>
import { format, toDate } from 'date-fns'
import { fr } from 'date-fns/esm/locale'



export default {
  methods: {
    toDate,
    formatDate(date) {
      return format(toDate(date), 'P', { locale: fr })

    },
    formatAnchor(string) {
      return string.toLowerCase().replace(/ /g, "-")
    }
  }
}
</script>
