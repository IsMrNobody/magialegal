import axios from 'axios'

const SWEET_API_URL = process.env.SWEET_API_URL || 'https://sweet-blessing.herokuapp.com'
const USER_ID = '631e54b1547de751de13c089'

export const restaurante = async () => {
  try {
    const respuesta = await axios.get(`${SWEET_API_URL}/merchant/${USER_ID}`)
    return respuesta.data
  } catch (error) {
    return error
  }
}

export const productos = async () => {
  try {
    const respuesta = await axios.get(`${SWEET_API_URL}/product/user/${USER_ID}`)
    return respuesta.data
  } catch (error) {
    return error
  }
}

export const sendOrder = async (data) => {
  try {
    const respuesta = await axios.post(`${SWEET_API_URL}/order/create`, data)
    return respuesta.data
  } catch (error) {
    return error
  }
}

export const getOrders = async (id) => {
  try {
    const respuesta = await axios.get(`${SWEET_API_URL}/order/${id}`)
    return respuesta.data
  } catch (error) {
    return error
  }
}

export const getOrderById = async (id) => {
  try {
    const respuesta = await axios.get(`${SWEET_API_URL}/order/user/${id}`)
    return respuesta.data
  } catch (error) {
    return error
  }
}

export const paypal = async (data) => {
  try {
    const respuesta = await axios.post(`${SWEET_API_URL}/payment/create-order`, data)
    return respuesta.data
  } catch (error) {
    return error
  }
}