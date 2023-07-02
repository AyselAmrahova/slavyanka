import { base_url } from "./base_url";
import axios from "axios";

export const getAllSlider = async () => {
    let globalData;
    await axios.get(`${base_url}/slider/`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const editSlider = (id, payload) => {
    axios.put(`${base_url}/slider/${id}`, payload);
}
export const postSlider = (payload) => {
    axios.post(`${base_url}/slider`, payload);
};
export const deleteSliderByID = async (ID) => {
    let deleteSlider;
    await axios.delete(`${base_url}/slider/${ID}`).then((res) => {
        deleteSlider = res.data.data;
    });
    return deleteSlider;
};