<!--<template>-->
  <!--<div>-->

    <!--<div class="editor">-->
      <!--<div class="editor-header">-->
        <!--<h3 class="title">Sol's even simpler than SimpleMD Editor.</h3>-->
        <!--<small>With <b>Katex</b> live edit</small>-->
      <!--</div>-->

      <!--<div class="editor-body">-->

        <!--<div class="edition-section">-->
          <!--<textarea v-model="mdString" rows="20" cols="40"></textarea>-->
        <!--</div>-->

        <!--<div class="preview-section">-->
          <!--<span v-html="parsed"></span>-->
        <!--</div>-->

      <!--</div>-->

    <!--</div>-->

    <!--<div class="render">-->
    <!--</div>-->
    <!--livekatex-->
    <!--<br>-->
    <!--<br>-->


  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--name: 'LiveKatex',-->
    <!--data: () => ({-->
      <!--str: '',-->
      <!--parsed: '',-->
    <!--}),-->
    <!--computed: {-->
      <!--mdString: {-->
        <!--get() { return this.str; },-->
        <!--set(value) {-->

          <!--let md = require('markdown-it'),-->
            <!--mk = require('markdown-it-katex');-->

          <!--md.use(mk);-->

          <!--this.str = value;-->
          <!--this.parsed = md.render(value);-->
        <!--},-->
      <!--},-->
    <!--},-->
  <!--};-->
<!--</script>-->

<!--<style scoped>-->
  <!--.render {-->
    <!--font-size: 30px;-->
  <!--}-->

  <!--.editor {-->
    <!--border: 1px solid rgba(211, 211, 211, 0.47);-->

  <!--}-->

  <!--.title {-->
    <!--padding-left: 20px;-->
    <!--color: rgb(92, 98, 100);-->
  <!--}-->

  <!--small {-->
    <!--position: relative;-->
    <!--top: -20px;-->
    <!--left: 300px;-->
  <!--}-->

  <!--.editor-body {-->
    <!--display: flex;-->
    <!--flex-direction: row;-->
  <!--}-->

  <!--.edition-section {-->
    <!--width: 50vw;-->
  <!--}-->

  <!--.preview-section {-->
    <!--font-size: 20px;-->
    <!--width: 50vw;-->
    <!--border: 1px solid rgba(211, 211, 211, 0.47);-->
  <!--}-->
<!--</style>-->
