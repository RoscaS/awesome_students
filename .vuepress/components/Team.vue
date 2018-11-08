<template>
  <section class="wrapper">
    <vs-card>
      <div slot="header">
        <div class="header-wrapper">
          <h3 class="text">L'équipe</h3>
          <div class="icon">
            <i class="material-icons">supervisor_account</i>
          </div>
        </div>
      </div>
        <vs-list>
          <vs-list-item v-for="(i, idx) in teamList"
                        :key="idx"
                        :title="i.name"
                        :subtitle="i.class">
            <template slot="avatar">
              <vs-avatar v-if="i.GHID" :src="avatar(i.GHID)"/>
              <vs-avatar v-else color="#2973B7"/>
            </template>
          </vs-list-item>
        </vs-list>
    </vs-card>
  </section>

</template>

<script>
  import 'material-icons/iconfont/material-icons.css';
  import { knownAuthors, groups } from '../data';
  import { capitalize } from '../utils';

  export default {
    props: {
      members: {type: Array},
    },
    name: 'Team',
    computed: {
      teamList() {
        if (this.members) {
          let list = [];

          for (let i of this.members) {
            let known = this.isKnown(i);

            if (known) {
              list.push(known);
            } else if (i.includes('<')) {
              let data = i.replace(/([<>])/g, '').split(';');
              let name = data[0].split(' ');
              list.push({
                name: `${capitalize(name[0])} ${name[1] ? capitalize(name[1]) : ''}`,
                class: data[1] ? data[1].trim() : 'Classe non spécifiée',
              });
            }
          }
          return list;
        }
        return groups.snm;
      },
    },

    methods: {
      avatar(id) {
        return `https://avatars0.githubusercontent.com/u/${id}?s=460&v=4`;
      },

      isKnown(name) {
        for (let i of knownAuthors) {
          if (i.name.includes(name)) return i;
        }
        return false;
      },

    },
  };
</script>

<style lang="scss" scoped>
  @import '../theme/styles/config';

  .wrapper {
    padding-top: 20px;
    max-width: 300px;
  }

  .header-wrapper {
    display: flex;
    flex-direction: row;

    .text {
      margin-left: 20px;
    }

    .icon {
      margin-left: auto;
      margin-right: 12px;
      margin-top: -4px;
      color: $StyleBlue;

      .material-icons {
        font-size: 30px;
      }
    }
  }


</style>
