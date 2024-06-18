import { createStore } from "vuex";

const store = createStore({
    state:{
        count:0,
        title:"这是store里面存储的数据 "
    },
    mutations:{
        increment (state){
            state.count++
        }
    },
    actions:{

    }
})

export default store;