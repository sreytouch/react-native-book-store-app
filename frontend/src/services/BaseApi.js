import axios from "axios";

export const getAll = async () => {
    await axios.get('http://192.168.1.12:3000/', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
};

const BaseApi = { getAll };

export default BaseApi;