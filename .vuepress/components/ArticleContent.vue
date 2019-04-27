<template>
  <div>
    <div class="content article-header" v-if="$page.frontmatter.date">
      <router-link class="nav-link" :to="branchLink">
        <h4>{{ prettyBranch }}</h4>
      </router-link>
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
  import { isExternal } from '../theme/util';
  import { branchesFullName } from '../data';
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

      prettyBranch() {
        return branchesFullName[this.rawBranch];
      },
      rawBranch() {
        return this.$page.path.split('/').splice(-2)[0];
      },
      branchLink() {
        return `/cours/${this.rawBranch}/`;
      }

    },
    methods: {
      isExternal,
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
    margin-bottom -100px !important
    padding-top: 8.6rem !important

    h1
      margin-bottom 5px !important
      padding-top: 40px !important


  .spacer
    margin-top 30px !important

  .team
    padding-top 30px !important

</style>
