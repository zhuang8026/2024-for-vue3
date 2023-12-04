import axios from 'axios';
import { getCookie } from '@/api/cookie';
// import '@/assets/js/api/interceptors.js';

let API_BASE = import.meta.env.VITE_API_BASE;
let API_BASE_NEW = import.meta.env.VITE_API_BASE;

const apiConfig = {
    SERVER_JAVA: API_BASE, // https://www.energy-active.org.tw/api
    SERVER_PYTHON: API_BASE_NEW // https://poc.energy-active.org.tw
};

/**
 * desc: 設定 call API 前期作業 (setting token)
 * method: GET, POST, PATCH, PULL
 * url: '/main/login'
 * params: payload data
 * contentType: application/json
 * auth: has token ?
 * isPythonVersion: java server or python server
 * */
export const apiRequest = async (method, url, params, contentType, auth, isPythonVersion = false) => {
    const headers = {
        'Content-Type': contentType || 'application/x-www-form-urlencoded;charset=utf-8'
    };

    if (auth) {
        // const { token } = window.$nuxt.$store.state.user;
        const USER_TOKEN = getCookie('iii_token'); // cookie testing
        headers.Authorization = `Bearer ${USER_TOKEN}`;
    }

    try {
        const response = await axios({
            headers,
            method,
            url: (isPythonVersion ? apiConfig.SERVER_PYTHON : apiConfig.SERVER_JAVA) + url,
            data: params
        });
        const { status, data } = response;
        if (status === 200) {
            return data;
        } else {
            return new Error(data.message);
        }
    } catch (error) {
        return error;
    }
};
