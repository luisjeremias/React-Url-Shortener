import axios from 'axios'

export const key = "PASTE YOUR API HERE";

const api = axios.create({
  baseURL:'https://api-ssl.bitly.com/v4',
  headers:{
    'Authorization':`Bearer ${key}`
  },
})


export default api