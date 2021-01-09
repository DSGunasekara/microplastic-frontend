
  <template>
    <v-container>
      <v-row >
        <v-col
            v-for="n in 8"
            :key="n"
            cols="12"
            sm="4"
        >
          <graphItem></graphItem>
        </v-col>
      </v-row>
    </v-container>
  </template>

<script>
import graphItem from "../components/graphItem";
export default {
name: "Home",
  components:{
    graphItem,
  },
}
</script>

<style scoped>

</style>