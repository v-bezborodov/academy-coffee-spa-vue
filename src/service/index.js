import axios from 'axios';

// export default ({ requiresAuth = false } = {}) => {
//     const options = {};  options.baseURL = 'http://localhost:3000/api/';
//
//     if (requiresAuth) {
//         options.headers.Authorization = 'JWT TOKEN'
//     }
//
//     const instance = axios.create(options);
//     return instance;
// };

export default axios.create({
    baseURL: `your API end point`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})