<template>
  <RenderlessPagesList :byPaths="byPaths" :notPaths="notPaths" :byTags="byTags"
                       :byAuthors="byAuthors" :notAuthors="notAuthors"
                       :byCategories="byCategories" :notTags="notTags"
                       :notCategories="notCategories">
    <div slot-scope="{ pages, authors, formatDate, formatAnchor }">
      <div v-for="author in authors()" :key="author">
        <h2>
          <a :href="'#'+formatAnchor(author)" aria-hidden="true"
             class="header-anchor">#</a>
          {{ author }}
        </h2>
        <BlogPosts :byAuthors="author"/>
      </div>
    </div>
  </RenderlessPagesList>
</template>

<script>
  import RenderlessPagesList from './RenderlessPagesList'
  import blogPageListProps from './blogPageListProps.js'

  export default {
    props: blogPageListProps,
    components: {
      RenderlessPagesList,
    },
  }
</script>
