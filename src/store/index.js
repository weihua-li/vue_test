//引入Vue核心库
import Vue from "vue";
//引入Vuex库
import Vuex from 'vuex';
//应用Vuex插件
Vue.use(Vuex);

const actions = {
    oddAdd(context, value){
        if(state.sum % 2 != 0){
            context.commit('add', value);
        }
    },
    delayAdd(context, value) {
        setTimeout(function(){
            context.commit('add', value);
        },500)
    }
};
const mutations = {
    add(state,value){
        state.sum += value
    },
    reduce(state,value){
        state.sum -= value
    },
};
const state = {
    sum: 0
};
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})