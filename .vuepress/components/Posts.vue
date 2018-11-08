<template>

  <div class="wrapper">
    <h2 v-if="!pages">Articles</h2>

    <section class="section" v-if="articles.length">
      <router-link class="box"
                   v-for="(article, key) in articles"
                   :key="key"
                   :to="article.path">


        <vs-row vs-w="12">
          <vs-col class="enumerate" vs-w="1" v-if="!pages">
            <span class="diez">#</span>
            <span class="number">{{articles.length - key}}</span>
          </vs-col>
          <vs-col :vs-w="pages ? '12' : '11'">
            <vs-col vs-w="7" vs-xs="12" vs-type="flex">
              <span class="title">{{article.title}}</span>
            </vs-col>

            <vs-col class="category" vs-w="5" vs-xs="12" vs-type="flex">
              <div v-if="pages" class="tag">
                <div class="chip" style="color: #5B3CC4;">
                  <i v-if="article.tag === 'cours'"
                     class="fal fa-fw fa-pen"></i>
                  <i v-else class="fal fa-fw fa-newspaper"></i>
                  <span class="cat-text">{{ dict[article.category] }}</span>
                </div>
              </div>
            </vs-col>

            <vs-col vs-w="12" vs-type="flex" vs-justify="flex-start">
              <small class="date-author">
                <span class="date">{{article.date}}&nbsp;</span>
                <span>par</span>
                <span class="author">{{author(article.author)}}</span>
              </small>
            </vs-col>
          </vs-col>
        </vs-row>

      </router-link>
    </section>
    <section class="section" v-else>
      <span class="empty">
        Aucun article pour le moment...
      </span>
    </section>
  </div>


</template>

<script>
  import { firstNamesOnly } from '../utils';
  import { branchesFullName } from '../data';
  import { DateTime, Settings } from 'luxon';

  Settings.defaultLocale = 'fr';

  export default {
    props: {
      pages: {type: String},
    },
    data: () => ({
      dict: branchesFullName,
    }),
    computed: {
      articles () {
        let articles = [];
        let allPosts = this.$site.pages.filter(x => {
          return x.path.includes(this.pages ? this.pages : this.$page.path)
            && x.path.endsWith('.html');
        });
        let sortedPosts = allPosts.sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
        sortedPosts.forEach(i => {
          articles.push({
            author: i.frontmatter.author,
            tag: i.path.split('/')[1],
            category: i.path.split('/')[2],
            title: i.frontmatter.title,
            path: i.path,
            date: this.date(i.frontmatter.date),
          });
        });
        return articles;
      },
    },
    methods: {
      date (date) {
        return DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);
      },
      getCategory (path) {
        let cat = path.split('/')[2];
        cat = cat.replace(/_/gi, ' ');
        return cat[0].toUpperCase() + cat.slice(1, cat.length);
      },
      author(author) {
        return firstNamesOnly(author);
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "../theme/styles/config";

  h2 {
    margin-top: 40px;
  }

  a:hover {
    text-decoration: none !important;
  }

  .empty {
    font-family: 'Cardo', serif;
    font-style: italic;
    font-size: 18px;
  }

  .section {
    margin: 40px 0 40px 0;
  }

  .box {
    transition: .5s ease;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #f1f1f1;
    display: block;
    padding: 5px 20px 5px 20px;
    margin-top: 6px;
    cursor: pointer;
    &:hover {
      transition: .5s ease;
      border-color: $StyleBlue;
      //border-color: $isPurple;
    }
  }

  .enumerate {
    width: 30px !important;
    margin-top: 4px;

    .diez {
      color: rgba(133, 133, 133, 0.68);
      font-size: 15px;
      font-style: italic;
      margin-left: -10px;
    }
    .number {
      color: black;
      font-weight: 400;
      font-size: 20px;
      margin-left: -1px;
      z-index: 4;
    }
  }

  .title {
    font-family: 'Montserrat', sans-serif;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .category {
    margin-left: auto;
    color: #2c3e50;
    font-family: 'Open Sans', sans-serif;
    @media (max-width: $MQMobile) {
      margin-left: inherit;
      margin-right: auto;
    }
  }

  .tag {
    margin-left: auto;
    font-family: 'Open Sans', sans-serif;
    @media (max-width: $MQMobile) {
      margin-left: inherit;
      margin-right: auto;
    }
  }

  .chip {
    border-radius: 5px;
    font-size: 10px;
    background-color: #eeeeee;
    padding: 5px 10px 5px 10px;
    i {
      margin-right: 5px;
    }
  }

  .date-author {
    color: #858585;
    font-family: 'Open Sans', sans-serif;
    .author {
      color: $StyleBlue;
    }

  }

</style>
