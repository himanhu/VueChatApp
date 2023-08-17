import Vue from 'vue';
import Vuex from 'vuex';
import { conversation, currentUser } from './data'; 

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conversation: [],
    currentUser:{},
  },
  mutations: {
    setConversation(state, data) {
      state.conversation = data;
    },
    setMe(state, data) {
      state.currentUser = data;
    },
    addMessage(state, message) {
      state.conversation.push(message);
    },
  },
  actions: {

    fetchConversation({ commit }) {
      setTimeout(() => {
        commit('setConversation', conversation);
      }, 500);
    },


    fetchMe({ commit }) {
      commit('setMe', currentUser);
    },
    
    sendReply({ commit }, message) {
        const reply = {
          message: message,
          from: {
            id: 48,
            fistName: 'Jack',
            lastName: 'Dowager',
            thumbnail: 'https://images.generated.photos/g232OgTeDpORCR483-Ko3acnrLoePZIbyMDabR64x2U/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MDgyODAuanBn.jpg',
        },
          date: new Date().toISOString(),
        };
        commit('addMessage', reply);

       // return Vue.ServiceFile.SendChat(payload).then(
        //     res => {
        //       commit("remove_order", payload.id);
        //       return Promise.resolve(true);
        //     },
        //     err => {
        //       return Promise.reject(err);
        //     }
        //   );


    },
  },
});
