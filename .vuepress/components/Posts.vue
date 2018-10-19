<template>

  <div class="wrapper">
    <a class="box" :href="article.path" v-for="article in articles">
      <div class="top-row">
        <span class="title">{{article.title}}</span>
        <span class="category">{{article.category}}</span>
      </div>
        <small class="bottom-row">
          posté le
          <span class="date">{{article.date}}</span>
          par
          <span class="author">{{article.author}}</span>
        </small>
    </a>
  </div>




</template>

<script>
  import { DateTime, Settings } from 'luxon'

  Settings.defaultLocale = 'fr'

  export default {
    props: {
      pages: {type: String},
    },
    data: () => ({
      selected: [],
    }),
    computed: {
      articles () {
        let articles = []
        let allPosts = this.$site.pages.filter(x => {
          return x.path.startsWith(`/${this.pages}/`) &&
            x.path.endsWith('.html')
        })
        let sortedPosts = allPosts.sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        })
        sortedPosts.forEach(i => {
          articles.push({
            author: i.frontmatter.author,
            category: this.getCategory(i.path),
            title: i.frontmatter.title,
            path: i.path,
            date: this.getDate(i.frontmatter.date),
          })
        })
        return articles
      },
    },
    methods: {
      getDate (date) {
        return DateTime.fromISO(date).toLocaleString(DateTime)
      },
      getCategory (path) {
        let cat = path.split('/')[2].replace('_', ' ')
        return cat[0].toUpperCase() + cat.slice(1, cat.length)
      },
      handleSelected () {

      },
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:600');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

  .box {
    transition: .5s ease;
    background-color: white;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.07);
    color: #4a4a4a;
    display: block;
    padding: 5px 20px 5px 20px;
    margin-top: 6px;
    cursor: pointer;
  }

  .box:hover {
    transition: .5s ease;
    /*box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);*/
  }


  .top-row {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 500px){
    .top-row {
      flex-direction: column;
    }
  }

  .bottome-row {
    display: flex;
    font-family: 'Open Sans', sans-serif;
  }
  .category {
    margin-left: auto;
    font-weight: bold;
  }
  @media (max-width: 500px){
    .category {
      margin-left: inherit;
    }
  }
  .title {
    font-family: 'Montserrat', sans-serif;
    min-width: 300px;
    color: #3eaf7c;

  }
  .author {
    color: #2973b7;
  }
  .date {

  }




  a.box:hover, a.box:focus {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;
  }

  a.box:active {
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;
  }

  .post-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .wrapper {
    margin-top: 20px;
  }

  .card-title {
    font-weight: 700;
    line-height: 1.25;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
  }

  .post-title {
    font-family: 'Open Sans', sans-serif;
    font-size: .9rem;
  }

  p {
    /*line-height: 10px;*/
  }


</style>
