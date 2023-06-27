import { base_url } from "./base_url";
import axios from "axios";

// 3CARDS
export const getAllThreeCards = async () => {
    let globalData;
    await axios.get(`${base_url}/three-cards`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
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

// CONTACT
export const getAllContact = async () => {
    let globalData;
    await axios.get(`${base_url}/contact`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const editContact = (id, payload) => {
    axios.put(`${base_url}/contact/${id}`, payload);
}

// ABOUT
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

// WATER
export const getAllWater = async () => {
    let globalData;
    await axios.get(`${base_url}/water`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const editWater = (id, payload) => {
    axios.put(`${base_url}/water/${id}`, payload);
}

// BENEFIT
export const getAllBenefit = async () => {
    let globalData;
    await axios.get(`${base_url}/benefit`)
        .then((res) => {
            globalData = res.data.data;
        })
    return globalData;
}
export const editBenefit = (id, payload) => {
    axios.put(`${base_url}/benefit/${id}`, payload);
}





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
