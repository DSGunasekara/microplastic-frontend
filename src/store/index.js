import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    graphs: []
  },
  getters:{
    allGraphs: (state) => state.graphs,
  },
  actions: {
    async getGraphs({commit}){
      try{
        const graphs = await axios.get("graph")
        commit("setGraphs", graphs.data);
        return;
      }catch (e) {
        console.log(e);
        return e;
      }
    },
  },
  mutations: {
    setGraphs: (state, graphs)=> state.graphs = graphs,
  },
  modules: {
  }
})
