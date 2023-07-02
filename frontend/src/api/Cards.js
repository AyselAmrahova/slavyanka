import { base_url } from "./base_url";
import axios from "axios";

export const getAllThreeCards = async () => {
    let globalData;
    await axios.get(`${base_url}/three-cards`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const deleteThreeCardsByID = async (id) => {
    let deleteThreeCard;
    await axios.delete(`${base_url}/three-cards/${id}`).then((res) => {
        deleteThreeCard = res.data.data;
    });
    return deleteThreeCard;
};
export const postThreeCards = (payload) => {
    axios.post(`${base_url}/three-cards`, payload);
};
export const editThreeCard = (id, payload) => {
    axios.put(`${base_url}/three-cards/${id}`, payload);
}