import { base_url } from './base_url';
import axios from 'axios';

export const getAllSliders = async () => {
    let allSliders;
    await axios.get(`${base_url}/sliders`)
        .then((res) => {
            allSliders = res.data.data;
        })

    return allSliders;
}

export const postSlider = (payload) => {
    axios.post(`${base_url}/sliders`, payload);
}