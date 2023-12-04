import { COMPONENT_NAME, ROLE } from '@/assets/enum/enum';
import axios from 'axios';
import { defineStore } from 'pinia';

import { setCookie, getCookie } from '@/api/cookie';

// Define a type for your state
interface MyState {
    userData: {};
    isModalOpen: boolean;
    modalInputData: { val: any };
    modalOutputData: {};
    apiRequestCount: number;
    apiReq: any;
    isLoadingOpen: boolean;
    isLoadingTest: string;
    loading: {
        [key: string]: boolean; // Replace 'string' with the actual type you intend to use
    };
    rebuildSensorId: any[];
}

export const useGlobalStore = defineStore({
    id: 'globalStore',
    state: (): MyState => ({
        userData: {},
        isModalOpen: false,
        modalInputData: { val: {} }, // modal 內需要的資料
        modalOutputData: {}, // model 送出資料
        rebuildSensorId: [],
        apiRequestCount: 0, // count api call total
        apiReq: axios.create({}),
        isLoadingOpen: false,
        isLoadingTest: 'Loading',
        loading: {
            [COMPONENT_NAME.APP]: false
        }
    }),
    getters: {
        getModalInputData: state => state.modalInputData,
        getModalOutputData: state => state.modalOutputData,
        getRebuildSensorId: state => state.rebuildSensorId,
        getApiRequestCount: state => state.apiRequestCount,
        getIsLoadingPage: state => page => state.loading[page],
        getIsLoadingOpen: state => state.isLoadingOpen,
        getIsLoadingTest: state => state.isLoadingTest
    },

    actions: {
        setIsModalOpen(isOpen: boolean = true) {
            this.isModalOpen = isOpen;
        },
        setApiReq(axios) {
            this.apiReq = axios;
        },
        setModalInputData(data: any) {
            Object.assign(this.modalInputData, data);
        },
        setModalOutputData(data: any) {
            Object.assign(this.modalOutputData, data);
        },
        setRebuildSensorId(sesnorIdList: Array<any> = []) {
            this.rebuildSensorId = sesnorIdList;
        },
        setApiRequestCount(count: number) {
            this.apiRequestCount = count;
        },
        setLoadingPage(page, val) {
            console.log('setLoadingPage', page, val);
            this.loading[page] = val;
            console.log('this.loading', this.loading);
        },
        setIsLoadingOpen(val) {
            this.isLoadingOpen = val;
        },
        setIsLoadingTest(val) {
            this.isLoadingTest = val;
        },
        setUserData(apidata) {
            const { token, phones, identity, userInfo } = apidata;
            this.userData['token'] = token;
            this.userData['phones'] = phones;
            this.userData['identity'] = identity;
            this.userData['userInfo'] = { ...userInfo }; // 物件解構賦值 (淺拷貝)

            setCookie('iii_token', token); // 設定cookie
        }
    }
});
