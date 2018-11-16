<template>

  <section>


    <vs-list>

      <vs-list-header icon="assignment" title="Evaluez les systèmes suivants:" color="#3EAF7C">

      </vs-list-header>
      <Question v-for="i in questions" :question="i"/>

    </vs-list>

  </section>


</template>

<script>
  import data from './GenieLog/Exercice_domotique/exerciceDomotiqueData';
  import Question from './GenieLog/Exercice_domotique/Question';

  export default {
    name: 'ExoDomo',
    components: {Question},
    data: () => ({
      questions: [],
      rolesSelect: -1,
      roles: [
        {text: 'Proffesseur', value: 0},
        {text: 'Étudiant ', value: 1},
        {text: 'Technicien', value: 2},
        {text: 'Autre', value: 3},
      ],
      step: 25,
      maxLength: 10,
      test: '',
    }),
    mounted() {
      this.buildQuestions();
    },
    methods: {
      buildQuestions() {
        data.questions.forEach(i => {
          this.questions.push({
              value: 0, question: i, comment: '', popup: false,
            },
          );
        });
      },
    },
  };
</script>

<style lang="scss" scoped>

  .card-body {
    padding: 10px;
  }

  .roles {
    padding-top: 20px;
    padding-bottom: 20px;
  }

</style>
