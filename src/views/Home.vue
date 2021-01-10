
  <template>
    <v-container>
      <v-row >
        <v-col
            v-for="graph in graphs"
            :key="graph.date"
            cols="12"
            sm="4"
        >
          <graph-item v-bind:graph="graph"></graph-item>
<!--        <h1>{{ graph.date }}</h1>-->
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
import graphItem from "../components/graphItem";
import { mapGetters, mapActions } from "vuex";

export default {
name: "Home",
  components:{
    graphItem,
  },
  methods:{
    ...mapActions(["getGraphs"])
  },
  computed:{
  ...mapGetters(["allGraphs"]),
    graphs(){
    return this.allGraphs
    }
  },created() {
    try {
      this.getGraphs()
    }catch (e){
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>