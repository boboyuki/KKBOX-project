/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
// 套件
import qs from 'querystring';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    config: '',
  },
  mutations: {
    TOKEN(state, token) {
      state.token = token;
    },
    CONFIG(state, config) {
      state.config = config;
    },
  },
  actions: {
    async getToken(context) {
      const oauth = {
        grant_type: process.env.VUE_APP_GRANTTYPE,
        client_id: process.env.VUE_APP_CLIENTID,
        client_secret: process.env.VUE_APP_CLIENTSECRET,
      };
      await axios.post('/token', qs.stringify(oauth))
        .then((res) => {
          context.commit('TOKEN', res.data.access_token);
          const config = {
            headers: {
              Authorization: `${res.data.token_type} ${res.data.access_token}`,
            },
          };
          context.commit('CONFIG', config);
        });
    },

  },
  getters: {
    kkboxToken(state) {
      return state.token;
    },
    config(state) {
      return state.config;
    },
  },
  modules: {
  },
});
