import { base_url } from "./a";
import axios from "axios";

// multer
//image----------------------------------------------------------------
export const getAll = async () => {
    let globalData;
    await axios.get(`${base_url}/imagees`)
        .then((res) => {
            globalData = res.data;
        })
    return globalData;
}
export const postImg = (payload) => {
    axios.post(`${base_url}/imagees`, payload);
}
export const deleteImg = (id) => {
    axios.delete(`${base_url}/imagees/${id}`);
}
