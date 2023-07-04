import { base_url } from "./base_url";
import axios from "axios";

export const getAllCategories = async () => {
    let globalData;
    await axios.get(`${base_url}/categories`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const getCategoryByID = async (ID) => {
    let globalData;
    await axios.get(`${base_url}/categories/${ID}`).then((res) => {
        globalData = res.data.data;
    });
    return globalData;
};
export const deleteCategorytByID = async (ID) => {
    let deletedCategory;
    await axios.delete(`${base_url}/categories/${ID}`).then((res) => {
        deletedCategory = res.data.data;
    });
    return deletedCategory;
};
export const postCategory = (payload) => {
    axios.post(`${base_url}/categories`, payload);
};
export const putCategory = (id, payload) => {
    axios.put(`${base_url}/categories/${id}`, payload);
}
