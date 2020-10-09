import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
// import { SET_DATA } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },

  // getters: {
  //   getData: (state) => {
  //     return state.lists;
  //   },
  //   getCountData: () => {
  //     return 0;
  //   },
  // },

  mutations: {
    SET_DATA(state, data) {
      state.users = data;
    },
  },

  actions: {
    loadUser({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((r) => r.data)
        .then((users) => {
          commit("SET_DATA", users);
        });
    },
    // setDatas(context, data) {
    //   context.commit("SET_DATA", data);
  },
});
