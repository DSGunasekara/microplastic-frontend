<template>
  <v-form @submit.prevent>
    <v-container>
      <h3>Update the location</h3>
      Date: {{ date | moment }}
      <v-row>
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="location"
              label="Location"
              required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="update(id)">Update</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";

export default {
name: "update",
  data:() =>({
    location: '',
    date: '',
    id: ''
  }),
  computed:{
    ...mapGetters(["allGraphs"]),
  },
  methods:{
  ...mapActions(["updateGraph"]),
   getGraph(){
     let graph =  this.allGraphs.filter(graph=> graph._id === this.$route.params.id)
     this.date = graph[0].date
     this.id = graph[0]._id
     this.location = graph[0].location
   },
    async update(id){
     try {
       const updatedGraph = {
         _id: id,
         location: this.location
       }
       console.log(updatedGraph)
       await this.updateGraph(updatedGraph);
       await this.$router.push('/')
       return;
     }catch (e){
       console.log(e);
       return e;
     }
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  },
  created() {
  this.getGraph()
  }
}
</script>

<style scoped>

</style>