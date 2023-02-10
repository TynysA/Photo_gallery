import {createStore} from "vuex";

export default createStore({
    state: {
        likes:[]
    },
    getters:{
        lengthLikes(state){
            return state.likes.length;
        },
        getLikes(state){
            return state.likes;
        }
    },
    mutations:{
        addToLikes(state,arr){
            state.likes.push(arr);
        },
    },
    actions:{

    },
    modules: {

    }
})