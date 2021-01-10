<template>
  <v-card
      class="mx-auto"
      max-width="344"
      outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Date: {{ graph.date | moment }}
        </div>
        <v-list-item-title class="headline mb-1">
          Location: {{ graph.location }}
        </v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions>
      <v-btn
          outlined
          rounded
          text
          @click="viewGraph(graph._id)"
      >
        View
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'
export default {
name: "graphItem",
  props:['graph'],
  methods:{
    viewGraph(graphId){
      this.$router.push(`/${graphId}`)
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
}
</script>

<style scoped>

</style>