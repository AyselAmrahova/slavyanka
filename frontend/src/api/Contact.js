import { base_url } from "./base_url";
import axios from "axios";
export const getAllContact = async () => {
    let globalData;
    await axios.get(`${base_url}/contact`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const getContactByID = async (id) => {
    let globalData;
    await axios.get(`${base_url}/contact/${id}`).then((res) => {
        globalData = res.data;
        console.log(res.data);
        console.log(res.data.data);
    });
    return globalData;
};
export const deleteContactByID = async (id) => {
    let deletedContact;
    await axios.delete(`${base_url}/contact/${id}`).then((res) => {
        deletedContact = res.data;
    });
    return deletedContact;
};
export const postContact = (payload) => {
    axios.post(`${base_url}/contact`, payload);
};
export const putContact = (id, payload) => {
    axios.put(`${base_url}/contact/${id}`, payload);
}