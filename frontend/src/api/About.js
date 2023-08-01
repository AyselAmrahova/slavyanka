import { base_url } from "./base_url";
import axios from "axios";

// ABOUT------------------------------------------------------------------------------------------------------------------------------------
export const getAllAbout = async () => {
    let globalData;
    await axios.get(`${base_url}/about`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const editAbout = (id, payload) => {
    axios.put(`${base_url}/about/${id}`, payload);
}