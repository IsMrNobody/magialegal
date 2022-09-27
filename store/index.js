import { restaurante } from "../plugins/sweetApi"

export const state = () => ({
    merchant: {}
})

export const mutations = {
  setMerchant( state, data ) {
    state.merchant = data
  }
}

export const actions = {
    async setMerchant({ commit }) {
    const merchant = await restaurante()
    commit('setMerchant', merchant)
  }
}
