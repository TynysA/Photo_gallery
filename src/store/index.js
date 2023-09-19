import { createStore } from "vuex";

export default createStore({
  state: {
    likes: [],
  },
  getters: {
    lengthLikes(state) {
      return state.likes.length;
    },
    getLikes(state) {
      return state.likes;
    },
    findThatLiked: (state) => (arr) => {
      return state.likes.some((item) => item.id === arr);
    },
  },
  mutations: {
    addToLikes(state, arr) {
      let some = 0;
      for (let i = 0; i < state.likes.length; i++) {
        if (state.likes[i].id === arr.id) {
          some = 1;
        }
      }
      if (some === 0) {
        state.likes.push(arr);
      }
    },
    removeFromLikes(state, arr) {
      for (let i = 0; i < state.likes.length; i++) {
        if (state.likes[i].id === arr.id) {
          // Use splice to remove the item at index i from the array
          state.likes.splice(i, 1);
          break; // Exit the loop once the item is removed
        }
      }
    },
  },
  actions: {},
  modules: {},
});
