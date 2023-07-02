import { base_url } from "./base_url";
import axios from "axios";

export const getCategoryProducts = async (id) => {
    let globalData;
    await axios.get(`${base_url}/products/category/${id}`)
        .then(res => {
            globalData = res.data;
        })
    return globalData
}
export const getAllProducts = async () => {
    let globalData;
    await axios.get(`${base_url}/products`)
        .then(res => {
            globalData = res.data;
        })
    return globalData
}
export const GetProductId = async (id) => {
    let globalData
    await axios.get(`${base_url}/products/${id}`).then((res) => {
        globalData = res.data;
    })
    return globalData
}
export const deleteProductByID = async (id) => {
    let deletedProduct;
    await axios.delete(`${base_url}/products/${id}`)
        .then(res => {
            deletedProduct = res.data.data;
        })
    return deletedProduct;
}
export const postProduct = async (payload) => {
    console.log(payload)
    await axios.post(`${base_url}/products/`, payload);
}
export const putProduct = async (id, payload) => {
    await axios.put(`${base_url}/products/${id}`, payload);
};