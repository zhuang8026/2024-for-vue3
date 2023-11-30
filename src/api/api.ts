import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

import { useGlobalStore } from '@/store/index';

import { ENV } from '@/assets/enum/enum';

// let host = 'http://127.0.0.1:8002/api/Device/Equipment/'

// 地端API

let hostAppURL: string = '';

/**
 * Event filter todo
 * statTime__gt  / endtTime__lt
 */

// API初始化設定

let apiEnv = import.meta.env.VITE_ENV; //現在環境
let env = import.meta;
let hostURL: string = '';
let hostName: string = '';
let apiURL: string = 'api/';
export let globalApiURL: any = axios.create({});

// 設定URL
let apiURLAccount = 'account/';

console.log('apiEnv:', apiEnv);
console.log('apiURL:', hostURL);
console.log('env:', env);

// user login, info
export let apiLogin: any;
export let apiLogout: any;
export let apiGetMyInfo: any;

// 地端APP
let appApiReq = {};

export let apiSetting = () => {
    let store = useGlobalStore();
    // 01 - API hostURL, url via different environment
    switch (apiEnv) {
        case ENV.MOCK:
        case ENV.HTTPS:
            hostName = `${window.location.origin}/`;
            hostURL = './mock/';
            hostAppURL = './mock/';
            break;
        case ENV.TEST:
            hostName = 'http://220.133.47.197/'; // for outside BE Alan
            hostURL = `${hostName}${apiURL}`; // for Lynn testing
            hostAppURL = 'http://127.0.0.1:35900/';
            break;
        case ENV.DEV:
            hostName = 'http://220.133.47.197/'; // for ais public server
            hostURL = `${hostName}${apiURL}`; // for Lynn testing
            hostAppURL = 'http://127.0.0.1:35900/';
            break;
        case ENV.DEMO:
            hostName = `${window.location.origin}/`;
            hostURL = `${hostName}${apiURL}`;
            hostAppURL = 'http://127.0.0.1:35900/';
            break;
        case ENV.STSGING:
        case ENV.PROD:
            hostName = `${window.location.origin}/`;
            hostURL = `${hostName}${apiURL}`;
            hostAppURL = 'http://127.0.0.1:35900/';
            break;
        default:
            hostURL = './mock';
            hostAppURL = '/127.0.0.1:8008/apiApp';
    } //end: switch

    // 02 - api global initial setting
    switch (apiEnv) {
        case ENV.MOCK:
            axionInit(globalApiURL, hostURL);
            break;
        case ENV.DEMO:
        case ENV.DEV:
        case ENV.PROD:
        case ENV.STSGING:
            // const token = getCookie(COOKIE_NAME.TOKEN);
            const token = `Token rHRIlM54Is/wO3/WCxlacg==`;
            globalApiURL.defaults.headers.common['Authorization'] = `Token ${token}`;
            axionInit(globalApiURL, hostURL);
            break;
    }

    appApiReq = axios.create({
        baseURL: hostAppURL
    });
    // const token = getCookie(COOKIE_NAME.TOKEN);
    const token = `Token rHRIlM54Is/wO3/WCxlacg==`;
    globalApiURL.defaults.headers.common['Authorization'] = `Token ${token}`;
    // console.log('hostAppURL', hostAppURL);

    switch (apiEnv) {
        case ENV.MOCK:
            console.log('setting mock api:', store.apiReq);
            apiLogin = () => store.apiReq.get(`apiLogin.json`); // login;
            apiLogout = () => store.apiReq.get(`apiLogout.json`); // logout;
            apiGetMyInfo = () => store.apiReq.get(`apiGetMyInfo.json`);
            break;
        case ENV.DEV:
        case ENV.STSGING:
        case ENV.PROD:
            apiLogin = payload => store.apiReq.post(`${apiURLAccount}login/`, payload); // login
            apiLogout = () => store.apiReq.post(`${apiURLAccount}logout/`); // logout
            apiGetMyInfo = () => store.apiReq.get(`${apiURLAccount}user/`); // get user info
            break;
    } //end: switch
};

// API共用處理
const axionInit = (req: any, base: string) => {
    const store = useGlobalStore();
    const _router = useRouter();
    const _route = useRoute();

    req.defaults.baseURL = base;

    console.log('req', req);

    store.setApiReq(req);
};
