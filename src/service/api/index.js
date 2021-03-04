import axios from 'axios';

const BASE_ENDPOINT = '/documents';

export default {
    show(id) {
        // return axios.get(`${BASE_ENDPOINT}/${id}`);
    },
    store(payload) {
        // let config = null;
        // if (payload instanceof FormData) {
        //     config = {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     };
        // }
        //
        // return axios.post(BASE_ENDPOINT, payload, config);
    }
}