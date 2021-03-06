/* 
  vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'

// 声明使用插件
Vue.use(Vuex)

// 相当于 data 对象
const state = {
  count: 1 // 初始化状态数据
}

/* 
  一个用来包含多个用来直接更新状态数据的方法的对象
*/
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

/* 
  一个包含n个用来间接更新状态数据的方法的对象
*/
const actions = {
  increment(context) {
    console.log(context)
    context.commit('INCREMENT')
  },
  decrement({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd({commit, state}) {
    if(state.count % 2 === 1){
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    },1000)
  }
}

/* 
  一个包含n个基于state的getter计算属性的方法的对象
*/
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }
}

/* 
  向外默认暴露store
*/
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})