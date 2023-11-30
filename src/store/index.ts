import { COMPONENT_NAME, POPUP, ROLE } from '@/assets/enum/enum';
import axios from 'axios';
import { defineStore } from 'pinia';
import { FUN_NAME } from '@/assets/enum/enum';

export const useGlobalStore = defineStore({
    id: 'globalStore',
    state: () => ({
        isFirstLogin: true,
        isModalOpen: false,
        modalType: POPUP.SENSOR_DISCONNECT,
        modalInputData: { val: {} }, // modal 內需要的資料
        modalOutputData: {}, // model 送出資料
        modalBtnClickType: '-', // 被click的按鈕
        userId: '1', // 3fa85f64-5717-4562-b3fc-2c963f66afa6
        userName: 'Mr. ADC',
        isEquipmentSave: false,
        rebuildSensorId: [],
        apiRequestCount: 0, // count api call total
        apiReq: axios.create({}),
        userRole: ROLE.ADMIN,
        sensorDetectSlectedId: '', // detect-sensor selected id, wheen detect, add it
        isLoadingOpen: false,
        isLoadingTest: 'Loading',
        apiType: '',
        loading: {
            [FUN_NAME.DEVICE]: false,
            [FUN_NAME.DEVICE_DETAIL]: false,
            [FUN_NAME.DEVICE_ADD]: false,
            [FUN_NAME.DEVICE_EDIT]: false,
            [FUN_NAME.GATEWAY]: false,
            [FUN_NAME.EVENT]: false,
            [FUN_NAME.EVENT_TRASH]: false,
            [FUN_NAME.EVENT_DETAIL]: false,
            [FUN_NAME.TRASH_DETAIL]: false,
            [FUN_NAME.EVENT_NOTIFICATION]: false,
            [FUN_NAME.MODEL]: false,
            [FUN_NAME.MODEL_DETAIL]: false,
            [FUN_NAME.MODEL_CREATE]: false,
            [FUN_NAME.MODEL_REBUILD]: false,
            [FUN_NAME.MODEL_NEW]: false,
            [FUN_NAME.MODEL_RETRAIN]: false,
            [FUN_NAME.DASHBOARD]: false,
            [FUN_NAME.USER_SETTING]: false,
            [FUN_NAME.PWD_RESET]: false,
            [FUN_NAME.SENSOR_DETECT]: false,
            [FUN_NAME.LOGIN]: false,
            [FUN_NAME.PWD_FORGET]: false,
            [FUN_NAME.SMTP]: false,
            [FUN_NAME.PERMISSION]: false,
            [FUN_NAME.SENSOR_OVERVIEW]: false,
            [FUN_NAME.PWD_SETTING]: false,
            [COMPONENT_NAME.MAIN]: false,
            [COMPONENT_NAME.APP]: false
        }
    }),

    getters: {
        getModalType: state => state.modalType,
        getModalInputData: state => state.modalInputData,
        getModalOutputData: state => state.modalOutputData,
        getModalBtnClickType: state => state.modalBtnClickType,
        getUserName: state => state.userName,
        getUserId: state => state.userId,
        getRebuildSensorId: state => state.rebuildSensorId,
        getApiRequestCount: state => state.apiRequestCount,
        getSensorDetectSelectedId: state => state.sensorDetectSlectedId,
        getIsLoadingPage: state => page => state.loading[page],
        getIsLoadingOpen: state => state.isLoadingOpen,
        getIsLoadingTest: state => state.isLoadingTest,
        getApiType: state => state.apiType,
        getIsFirstLogin: state => state.isFirstLogin
    },

    actions: {
        setIsModalOpen(isOpen: boolean = true) {
            this.isModalOpen = isOpen;
        },
        setApiReq(axios) {
            this.apiReq = axios;
        }
    }
});
