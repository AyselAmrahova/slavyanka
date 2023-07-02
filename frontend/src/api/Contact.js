import { base_url } from "./base_url";
import axios from "axios";


// CONTACT------------------------------------------------------------------------------------------------------------------------------------
export const getAllContact = async () => {
    let globalData;
    await axios.get(`${base_url}/contact`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const deleteContactByID = async (ID) => {
    let deletedContact;
    await axios.delete(`${base_url}/contact/${ID}`).then((res) => {
        deletedContact = res.data.data;
    });
    return deletedContact;
};
export const postContact = (payload) => {
    axios.post(`${base_url}/contact`, payload);
};
export const editContact = (id, payload) => {
    axios.put(`${base_url}/contact/${id}`, payload);
}