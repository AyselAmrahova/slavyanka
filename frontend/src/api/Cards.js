import { base_url } from "./base_url";
import axios from "axios";

export const getAllCards = async () => {
    let globalData;
    await axios.get(`${base_url}/cards`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const getCardByID = async (ID) => {
    let globalData;
    await axios.get(`${base_url}/cards/${ID}`).then((res) => {
        globalData = res.data.data;
    });
    return globalData;
};
export const deleteCardByID = async (id) => {
    let deleteCard;
    await axios.delete(`${base_url}/cards/${id}`).then((res) => {
        deleteCard = res.data.data;
    });
    return deleteCard;
};
export const postCard = (payload) => {
    axios.post(`${base_url}/cards`, payload);
};
export const putCard = (id, payload) => {
    axios.put(`${base_url}/cards/${id}`, payload);
}