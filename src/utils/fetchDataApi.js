import axios from "./axios";

export const getDataApi = async (url) => {
    const res = await axios.get(`/${url}`)
    return res;
}

export const postDataApi = async (url, post) => {
    const res = await axios.post(`/${url}`, post)
    return res;
}

export const putDataApi = async (url, post) => {
    const res = await axios.put(`/${url}`, post)
    return res;
}

export const patchDataApi = async (url, post) => {
    const res = await axios.patch(`/${url}`, post)
    return res;
}

export const deleteDataApi = async (url) => {
    const res = await axios.delete(`/${url}`)
    return res;
}