import axios from "axios";

export const getAll = async () => {
    await axios.create('http://192.168.1.12:3000/', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
};


export const baseUrl = "http://192.168.1.12:3000/";

const BaseApi = { getAll, baseUrl };

export default BaseApi;