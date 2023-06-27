import { base_url } from "./base_url";
import axios from "axios";

// ALL SLIDER
export const getAllSlider = async () => {
    let globalData;
    await axios.get(`${base_url}/slider/`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
// PUT SLIDER
export const editSlider = (id, payload) => {
    axios.put(`${base_url}/slider/${id}`, payload);
}
// POST SLIDER
export const postSlider = (payload) => {
    axios.post(`${base_url}/slider`, payload);
};
// DELETE SLIDER
export const deleteSliderByID = async (ID) => {
    let deleteSlider;
    await axios.delete(`${base_url}/slider/${ID}`).then((res) => {
        deleteSlider = res.data.data;
    });
    return deleteSlider;
};




// All 3cards
export const getAllThreeCards = async () => {
    let globalData;
    await axios.get(`${base_url}/three-cards`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
// delete 3cards
export const deleteThreeCardByID = async (ID) => {
    let deleteThreeCard;
    await axios.delete(`${base_url}/three-cards/${ID}`).then((res) => {
        deleteThreeCard = res.data.data;
    });
    return deleteThreeCard;
};
//post 3cards
export const postThreeCard = (payload) => {
    axios.post(`${base_url}/three-cards`, payload);
};
//edit 3cards
export const editThreeCard = (id, payload) => {
    axios.put(`${base_url}/three-cards/${id}`, payload);
}




//register
export const signUp = (payload) => {
    axios.post(`${base_url}/register`, payload)
}

//login
export const signIn = async (payload) => {
    const response = await axios.post(`${base_url}/login`, payload);
    return response.data;
}

//users
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



// All contact
export const getAllContact = async () => {
    let globalData;
    await axios.get(`${base_url}/contact`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
// delete contact
export const deleteContactByID = async (ID) => {
    let deleteContact;
    await axios.delete(`${base_url}/contact/${ID}`).then((res) => {
        deleteContact = res.data.data;
    });
    return deleteContact;
};
//post contact
export const postContact = (payload) => {
    axios.post(`${base_url}/contact`, payload);
};
//edit contact
export const editContact = (id, payload) => {
    axios.put(`${base_url}/contact/${id}`, payload);
}