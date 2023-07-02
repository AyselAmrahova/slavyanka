import { base_url } from "./base_url";
import axios from "axios";


// WATER------------------------------------------------------------------------------------------------------------------------------------
export const getAllWater = async () => {
    let globalData;
    await axios.get(`${base_url}/water`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const deleteWaterByID = async (id) => {
    let deleteThreeCard;
    await axios.delete(`${base_url}/water/${id}`).then((res) => {
        deleteThreeCard = res.data.data;
    });
    return deleteThreeCard;
};
export const postWater  = (payload) => {
    axios.post(`${base_url}/water`, payload);
};
export const editWater = (id, payload) => {
    axios.put(`${base_url}/water/${id}`, payload);
}