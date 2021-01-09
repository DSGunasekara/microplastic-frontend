
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['1ft', '2ft', '3ft', '4ft', '5ft', '6ft', '7ft', '8ft', '9ft', '10ft', '11ft', '12ft', '13ft'],
      datasets: [
        {
          label: 'Micro Plastic',
          borderColor: '#f87979',
          data: [46, 45, 32, 42, 36, 30, 27, 26, 24, 29, 22, 21, 12]
        },
        {
          label: 'Plastic Thread',
          borderColor: '#1fd0b3',
          data: [25, 20, 12, 15, 12, 10, 11, 7, 3, 5, 1, 1, 0]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style scoped>

</style>