<script>
  import { Line } from 'vue-chartjs'

  export default {
    data: () => ({
      options: {responsive: false, maintainAspectRatio: false}
    }),
    props: {
      x: {type: Array},
      y: {type: Array},
      height: {type: Number, default: 200},
      label: {type: String}
    },
    extends: Line,
    mounted () {
      this.renderChart({

        labels: this.x,
        xAxisID: 'x',
        yAxisID: 'y',
        label: 'Poule',
        datasets: [
          {
            data: this.y,
            label: this.label,
            backgroundColor: '#3eaf7c',
            borderColor: '#3eaf7c',
            fill: false,
          },
        ],
      })
    }
  }
</script>

<style scoped>

</style>
