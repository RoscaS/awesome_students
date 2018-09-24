<template>
<div>
  <div class="content article-header" v-if="$page.frontmatter.date">
    <h1>{{ $page.title }}</h1>
    <ArticleDate class="date" :frontmatter="$page.frontmatter"/>
  </div>
  <Content class="spacer" :custom="false"/>
</div>
</template>

<script>
import ArticleDate from './ArticleDate'
export default {
  name: "ArticleContent",
  components: {ArticleDate},
};
</script>

<style lang="stylus" scoped>
  @import '../theme/styles/config.styl'
  @require '../theme/styles/wrapper.styl'

  .article-header
    margin-bottom -120px !important

    h1
      margin-bottom 5px !important

  .spacer
    margin-top 30px !important


</style>
