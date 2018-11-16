<template>
  <section>

    <transition name="fade">
      <i class="far fa-check-circle" v-if="activated"></i>
    </transition>

    <vs-list-item :title="question.question" :subtitle="question.comment">
      <div @mousedown="activateSlider">
        <vs-slider :color="color(question.value)" ticks
                   class="slider"
                   :step=step
                   v-model="question.value"
                   text-fixed="%"/>
      </div>
      <vs-button @click="question.popup=true"
                 size="small"
                 class="btn-comment"
                 color="primary"
                 type="flat">
        Ajouter un commentaire
      </vs-button>
    </vs-list-item>


    <vs-popup class="holamundo" :title="question.question"
              :active.sync="question.popup">
      <p>Commentaire:</p>
      <vs-textarea :counter="maxLength" v-model="comment"/>
      <vs-button @click="postComment()"
                 :disabled="!btnValid"
                 color="success">
        Valider
      </vs-button>
    </vs-popup>
  </section>

</template>

<script>
  import data from './exerciceDomotiqueData';

  export default {
    name: 'Question',
    props: {
      question: {type: Object},
    },
    data: () => ({
      step: 25,
      maxLength: 100,
      comment: '',
      activated: false,
    }),
    computed: {
      btnValid() {
        let len = this.comment.length;
        return len <= this.maxLength;
      },
    },
    methods: {
      activateSlider() {
        this.activated = true;
      },
      color(value) {
        return this.activated ? data.colors[value / 25] : '#cccccc';
      },

      postComment() {
        this.question.popup = false;
        this.question.comment = this.comment;
        if (this.question.comment.length) {
          this.$vs.notify({
            title: 'Merci !',
            text: 'Commentaire enregistré',
            color: 'success',
            icon: 'check_circle',
          });
        }
      },
    },
  };
</script>

<style lang="scss" scoped>

  .fa-check-circle {
    position: absolute;
    color: #3EAF7C;
    margin-top: 10px;
    margin-left: -10px;
    transform: rotateZ(-15deg);
  }

  .btn-comment {
    display: block;
    margin-left: auto;
  }
</style>
