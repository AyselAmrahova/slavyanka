import { base_url } from "./base_url";
import axios from "axios";

//register------------------------------------------------------------------------------------------------------------------------------------
export const signUp = (payload) => {
    axios.post(`${base_url}/register`, payload)
}

//login
export const signIn = async (payload) => {
    const response = await axios.post(`${base_url}/login`, payload);
    return response.data;
}

//users------------------------------------------------------------------------------------------------------------------------------------
export const getUsers = async (token) => {
    let users;
    await axios.get(`${base_url}/users`, {
        headers: {
            'x-access-token': token
        }
    }).then((res) => {
        users = res.data;
    })
    return users;
}
//users------------------------------------------------------------------------------------------------------------------------------------
// export const deleteUser = async (userId, token) => {
//     let userDelete
//     await axios.delete(`${base_url}/users/${userId}`, {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
//         .then((res) => {
//             userDelete = res.data
//         })
//     return userDelete;
// }
