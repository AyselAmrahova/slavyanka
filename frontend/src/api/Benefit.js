import { base_url } from "./base_url";
import axios from "axios";


// BENEFIT------------------------------------------------------------------------------------------------------------------------------------
export const getAllBenefit = async () => {
    let globalData;
    await axios.get(`${base_url}/benefit`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const deleteBenefitByID = async (id) => {
    let deleteThreeCard;
    await axios.delete(`${base_url}/benefit/${id}`).then((res) => {
        deleteThreeCard = res.data.data;
    });
    return deleteThreeCard;
};
export const postBenefit  = (payload) => {
    axios.post(`${base_url}/benefit`, payload);
};
export const editBenefit = (id, payload) => {
    axios.put(`${base_url}/benefit/${id}`, payload);
}