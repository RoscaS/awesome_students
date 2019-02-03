<template>
  <div class="wrapper">
    <transition name="fade">
      <div v-if="show" @click="setQuote()">
        <blockquote v-if="!isEmpty" v-html="quote.quote"></blockquote>
      </div>
    </transition>
  </div>
</template>

<script>
  import quotes from '../quotes'
  import { randint } from '../helpers'

  export default {
    name: 'Quotes',
    data: () => ({
      show: false,
      isEmpty: false,
      quotes: quotes.slice(),
      quote: {},
    }),

    computed: {},
    methods: {
      setQuote() {
        if (!this.quotes.length) {
          this.isEmpty = true
          return
        }

        this.show = false
        const idx = randint(0, this.quotes.length - 1)
        this.quote = this.quotes[idx]
        this.quotes.splice(idx, 1)

        setTimeout(() => {
          this.show = true
        }, 1000)

        if (!this.quotes.length) {
          this.quotes = quotes.slice()
        }
      },
    },
    mounted() {
      this.setQuote()
      !this.isEmpty ? setInterval(this.setQuote, 20000) : null
    },
  }
</script>

<style lang="scss" scoped>

  .wrapper {
    height: 100px;
    user-select: none;
  }

</style>
