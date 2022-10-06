import {
  getOrders,
  getOrderById,
  sendComment
} from "../plugins/sweetApi"

export const state = () => ({
  orders: [],
  factura: {}
})

export const mutations = {
  setOrders( state, data ) {
    state.orders = data
  },
  setOrder( state, data ) {
    state.factura = data
  }
}

export const actions = {
  async getOrders({ commit, rootState }) {
    const id = rootState.merchant._id
    const data = await getOrders(id)
    commit('setOrders', data.reverse())
  },
  async getOrderById({ commit }, id) {
    try {
      const data = await getOrderById(id)
      if (!data._id) throw new Error(data)
      commit('setOrder', data)
    } catch (error) {
      this.$router.push('/')
    }
  },
  async sendMsg(_ctx, data) {
    await sendComment(data)
  }
}
