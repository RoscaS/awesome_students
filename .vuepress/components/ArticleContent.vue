<template>
  <div>
    <div class="content article-header" v-if="$page.frontmatter.date">
      <h1>{{ $page.title }}</h1>
      <ArticleData class="date" :frontmatter="$page.frontmatter"/>
      <div class="team" v-if="$page.frontmatter.project">
        <Team :members="members"/>
      </div>
    </div>
    <Content class="spacer" :custom="false"/>

  </div>
</template>

<script>
  import ArticleData from './ArticleData';
  import Team from './Team';

  export default {
    name: 'ArticleContent',
    components: {Team, ArticleData},
    computed: {

      members() {
        let rawList = this.$page.frontmatter.author.split(',');
        let cleanList = [];
        for (let i of rawList) {
          cleanList.push(i.trim());
        }
        return cleanList;
      },



    },
    methods: {
      author(authors) {

        return authors;
      },
    },
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

  .team
    padding-top 30px !important
    padding-bottom 30px !important


</style>
