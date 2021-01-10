<template>
  <div class="small">
    <h3>{{ this.location }}</h3>
    <h3>{{ this.date | moment}}</h3>
    <line-chart :chart-data="datacollection" :options="this.options"></line-chart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LineChart from "@/components/LineChart";
import moment from "moment";

export default {
  components:{
    LineChart
  },

  data: () => ({
    datacollection: null,
    location: '',
    date: '',
    options: {
      responsive: true,
      maintainAspectRatio: false
    }

  }),computed:{
    ...mapGetters(["allGraphs"]),
  },
  methods:{
    getPlastic(){
      let graph =  this.allGraphs.filter(graph=> graph._id === this.$route.params.id)
      this.location = graph[0].location
      this.date = graph[0].date

      let plasticData = graph[0].data.filter(plastic => plastic.plasticType === "plastic")
      let plasticQty = []
      plasticData.forEach(e => plasticQty.push(e.qty))

      let threadData = graph[0].data.filter(thread => thread.plasticType === "thread")
      let threadQty = []
      threadData.forEach(e => threadQty.push(e.qty))

      this.datacollection = {
        labels: ['1ft', '2ft', '3ft', '4ft', '5ft', '6ft', '7ft', '8ft', '9ft', '10ft', '11ft', '12ft', '13ft'],
        datasets: [
          {
            label: 'Micro Plastic',
            borderColor: '#f87979',
            data: plasticQty
          },
          {
            label: 'Plastic Thread',
            borderColor: '#1fd0b3',
            data: threadQty
          }
        ]
      }
    },
  },

  created() {
    this.getPlastic();
  }, filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
}
</script>

<style scoped>
h3{
  margin-left: 20px;
  font-family: Fira Code Light;
}

</style>