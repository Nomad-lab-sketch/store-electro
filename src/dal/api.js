import * as axios from "axios";

const instance = axios.create ({
    baseURL: `http://localhost:3000/`,
    withCredentials: true,
})

export const API = {
    getDataStore(){
        return instance.get(`dataStore`).then((response) => response.data);
    },
    getLaptops(){
        return instance.get('products').then((response) => response.data)
    },
}


