import axios from "axios";

export const axiosGet = (url)=> {
  return axios(url)
}

export const axiosDelete = (url)=> {
  return axios.delete(url)
}

export const axiosPost = (url, data)=> {
  return axios.post(url, data)
}

export const axiosPut = (url, data)=> {
  return axios.put(url, data)
}