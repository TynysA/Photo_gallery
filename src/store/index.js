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
        },


    },
    mutations:{
        addToLikes(state,arr){
            console.log(state.likes.length);
            let some = 0;
            for (let i = 0; i < state.likes.length; i++) {
                if (state.likes[i].id === arr.id){
                    some =1;
                }
            }
            if(some === 0){
                state.likes.push(arr);
            }
        },
        findThat(state,arr){
            let some = 0;
            for (let i = 0; i < state.likes.length; i++) {
                if (state.likes[i].id === arr.id){
                    some =1;
                }
            }
            if(some === 0){
                return true;
            }
            else{
                return false;
            }
        },

    },
    actions:{

    },
    modules: {

    }
})