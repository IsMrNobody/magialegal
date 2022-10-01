import { getOrders } from "../plugins/sweetApi"

export const state = () => ({
  orders: []
})

export const mutations = {
  setOrders( state, data ) {
    state.orders = data
  }
}

export const actions = {
  async getOrders({ commit, rootState }) {
    const id = rootState.merchant._id
    const data = await getOrders(id)
    // console.log(data);
    commit('setOrders', data.reverse())
  }
}
