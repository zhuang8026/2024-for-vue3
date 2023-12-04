import qs from 'qs';
import { apiRequest } from '@/api/apiRequest.ts';

/**
 * 登入
 * api working - 2023/william.C
 */
const apiLogin = async ({ userId, userPwd }) => {
    const data = qs.stringify({
        userId,
        userPwd
    });

    const res = await apiRequest('POST', '/main/login', data, undefined, false);
    return res;
};

/**
 * 登出
 * api working - 2023/william.C
 */
const logout = async () => {
    const formdata = new FormData();

    const res = await apiRequest('GET', '/main/logout', formdata, undefined, true);
    return res;
};

/**
 * 取得問卷調查
 * no use - 2023/william.C
 */
const getSurvey = async () => {
    const res = await apiRequest('GET', '/main/survey', undefined, undefined, true);
    return res;
};

/**
 * 填寫問卷調查
 * no use - 2023/william.C
 */
const setSurvey = async answer => {
    const data = qs.stringify({
        answer: JSON.stringify(answer)
    });
    const res = await apiRequest('POST', '/main/survey', data, undefined, true);
    return res;
};

/**
 * 取得用戶的問卷調查問題答案
 * no use - 2023/william.C
 */
const getSurveyInfo = async () => {
    const res = await apiRequest('GET', '/main/survey/info', undefined, undefined, true);
    return res;
};

/**
 * 修改用戶問卷調查答案
 * no use - 2023/william.C
 */
const editSurveyInfo = async answer => {
    const formData = new FormData();
    formData.append('answer', JSON.stringify(answer));
    const res = await apiRequest('PATCH', '/main/survey/edit', formData, undefined, true);
    return res;
};

/**
 * 忘記密碼 - 發送要求
 * api working - 2023/william.C
 */
const passwordForget = async userId => {
    const data = qs.stringify({
        userId
    });
    const res = await apiRequest('POST', '/main/password-forget', data, undefined, false);
    return res;
};

/**
 * 報修故障
 * no use - 2023/william.C
 */
const setMaintenance = async ({ userName, userPhone, userMail, contactTime, questionType }) => {
    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('userPhone', userPhone);
    formData.append('userMail', userMail);
    formData.append('contactTime', contactTime);
    formData.append('questionType', questionType);
    const res = await apiRequest('POST', '/main/customer-service', formData, undefined, true);
    return res;
};

/**
 * 客戶服務 修改密碼
 * api working - 2023/william.C
 */
const passwordReset = async ({ oriPassword, newPassword, reNewPassword }) => {
    const data = qs.stringify({
        oriPassword,
        newPassword,
        reNewPassword
    });

    const res = await apiRequest('PATCH', '/main/password-reset', data, undefined, true);
    return res;
};

/**
 * 客戶服務 用戶設定
 * no use - 2023/william.C
 */
const userSetting = async ({ nickName, allowedPhones }) => {
    const obj = {};
    if (nickName) {
        obj.nickName = nickName;
    }
    if (allowedPhones) {
        obj.allowedPhones = allowedPhones;
    }
    const data = qs.stringify(obj);

    const res = await apiRequest('PATCH', '/main/user-setting', data, undefined, true);
    return res;
};

/*
 * 取得昨日用電量
 * no use - 2023/william.C
 */
const getYesterday = async () => {
    const formdata = new FormData();

    const res = await apiRequest('GET', '/main/trace/yesterday', formdata, undefined, true);
    return res;
};

/**
 * 取得ORcode內容
 * no use - 2023/william.C
 */
const getQRCode = async () => {
    const res = await apiRequest('GET', '/main/user-setting', undefined, undefined, true);
    return res;
};

/*
 * 取得本月 (用電目標 & 預測 & 累積)
 * api working - 2023/william.C
 */
const getCurrentMon = async userId => {
    const res = await apiRequest('GET', `/main/trace/current-mon?user_id=${userId}`, undefined, undefined, true);
    return res;
};

/**
 * 行動電話登入QRCode驗證
 * no use - 2023/william.C
 */
const qrCodeVertify = async uid => {
    const res = await apiRequest('GET', `/main/mobile/${uid}`, undefined, undefined, false);
    return res;
};

/*
 * 用電流向
 * api working - 2023/william.C
 */
const getAppliance = async () => {
    const formdata = new FormData();
    const res = await apiRequest('GET', '/main/trace/appliance', formdata, undefined, true);

    return res;
};

/**
 * 手機登入
 * no use - 2023/william.C
 */
const mobileLogin = async ({ qrCode, phoneNumber }) => {
    const data = qs.stringify({
        qrCode,
        phoneNumber
    });

    const res = await apiRequest('POST', '/main/mobile/login', data, undefined, false);
    return res;
};

/**
 * BEE快速登入
 * no use - 2023/william.C
 */
const autoLogin = async () => {
    console.log('api_autoLogin start');
    const res = await apiRequest('POST', '/main/auto-login/', null, undefined, true);
    console.log('api_autoLogin:', res);
    return res;
};

/*
 * 忘記密碼 - 修改密碼 (首頁登入>忘記密碼>Email收信)
 * ex: https://www.energy-active.org.tw/reset_password?apsystem=IFA&user_id=Asd@iii.org.tw&code=HV8TSmB8
 * api working - 2023/william.C
 */
const restPassword = async ({ userId, apSystem, code, newPassword, reNewPassword }) => {
    const formdata = new FormData();
    formdata.set('userId', userId);
    formdata.set('apSystem', apSystem);
    formdata.set('code', code);
    formdata.set('newPassword', newPassword);
    formdata.set('reNewPassword', reNewPassword);

    const res = await apiRequest('PATCH', '/main/password-forget-reset', formdata, undefined, false);
    return res;
};

/**
 * 取得所有熱門節電話題
 * no use - 2023/william.C
 */
const getHotTopics = async ({ page, size }) => {
    const res = await apiRequest('GET', `/main/topics?page=${page}&size=${size}`, undefined, undefined, true);
    return res;
};

/**
 * 取得許願池最近10則留言
 * no use - 2023/william.C
 */
const getWishingPond = async () => {
    const res = await apiRequest('GET', '/main/wishing-pond', undefined, undefined, true);
    return res;
};

/*
 * 用電目標額度設定
 * api working - 2023/william.C
 */
const setGoal = async ({ target }) => {
    const formdata = new FormData();
    if (target) {
        formdata.set('target', target);
    }

    const res = await apiRequest('PATCH', '/main/trace/target', formdata, undefined, true);
    return res;
};

/**
 * 許願池留言
 * no use - 2023/william.C
 */
const setWishingPond = async ({ message }) => {
    const formdata = new FormData();
    formdata.set('message', message);

    const res = await apiRequest('POST', '/main/wishing-pond', formdata, undefined, true);
    return res;
};

/**
 * 取得所有過往節電話題
 * no use - 2023/william.C
 */
const getOldTopics = async ({ page, size }) => {
    const res = await apiRequest('GET', `/main/topics/history?page=${page}&size=${size}`, undefined, undefined, true);
    return res;
};

/**
 * 取得雲端遙控主頁
 * api working - 2023/william.C
 */
const getCloudRemoteList = async () => {
    const res = await apiRequest('GET', '/main/cloud-remote', undefined, undefined, true);
    return res;
};

/**
 * 更新裝置開關狀態
 * api working - 2023/william.C
 */
const updateDeviceOnOffStatus = async ({ devId, powerStatus }) => {
    const params = new URLSearchParams();
    params.append('deviceId', devId);
    params.append('onOff', powerStatus);

    const res = await apiRequest(
        'POST',
        '/main/cloud-remote/on-off',
        params,
        'application/x-www-form-urlencoded;charset=UTF-8',
        true
    );
    return res;
};

/**
 * 取得設備的排程列表
 * api working - 2023/william.C
 */
const getScheduleList = async ({ deviceId }) => {
    const res = await apiRequest('GET', `/main/cloud-remote/schedule?deviceId=${deviceId}`, undefined, undefined, true);

    if (res.data && !res.data.schedules) {
        res.data.schedules = [];
    }

    return res;
};

/**
 * 新增排程
 * api working - 2023/william.C
 */
const addSchedule = async ({ deviceId, action, schedFreq, schedDate, schedWeek, schedTime }) => {
    const formData = new FormData();
    formData.set('deviceId', deviceId);
    formData.set('action', action);
    formData.set('schedFreq', schedFreq);
    formData.set('schedTime', schedTime);

    if (schedDate) {
        formData.set('schedDate', schedDate);
    }

    if (schedWeek) {
        formData.set('schedWeek', schedWeek);
    }

    const res = await apiRequest('POST', '/main/cloud-remote/schedule', formData, undefined, true);
    return res;
};

/**
 * 更新排程
 * api working - 2023/william.C
 */
const updateSchedule = async ({
    deviceId,
    triggerName,
    action,
    schedFreq,
    schedDate,
    schedWeek,
    schedTime,
    enable
}) => {
    const formData = new FormData();
    formData.set('deviceId', deviceId);
    formData.set('triggerName', triggerName);
    formData.set('action', action);
    formData.set('schedFreq', schedFreq);
    formData.set('schedTime', schedTime);
    formData.set('enable', enable);

    if (schedDate) {
        formData.set('schedDate', schedDate);
    }

    if (schedWeek) {
        formData.set('schedWeek', schedWeek);
    }

    const res = await apiRequest('PATCH', '/main/cloud-remote/schedule', formData, undefined, true);
    return res;
};

/**
 * 移除排程
 * api working - 2023/william.C
 */
const deleteSchedule = async ({ triggerName }) => {
    const formData = new FormData();
    formData.set('triggerName', triggerName);

    const res = await apiRequest('DELETE', '/main/cloud-remote/schedule', formData, undefined, true);
    return res;
};

/**
 * 取得歷史排程列表
 * api working - 2023/william.C
 */
const getHistoryScheduleList = async ({ deviceId, page, size }) => {
    const res = await apiRequest(
        'GET',
        `/main/cloud-remote/schedule/history-page?deviceId=${deviceId}&page=${page}&size=${size}`,
        undefined,
        undefined,
        true
    );
    return res;
};

/**
 *  電子報-月報-取得近一年用電量比較
 * api working - 2023/william.C
 */
const getYearlyComparison = async ({ startDate }) => {
    const res = await apiRequest('GET', `/main/e-monthly/line-chart?startDate=${startDate}`, null, undefined, true);
    return res;
};

/**
 *  電子報-月報-取得該月用電量比較
 * api working - 2023/william.C
 */
const getMonthComparison = async ({ startDate }) => {
    const res = await apiRequest('GET', `/main/e-monthly/compare?startDate=${startDate}`, null, undefined, true);
    return res;
};

/**
 *電子報-週報-單週用電量比較
 * api working - 2023/william.C
 */
const getWeeklyComparison = async ({ startDate }) => {
    const res = await apiRequest('GET', `/main/e-weekly/compare?startDate=${startDate}`, null, undefined, true);
    return res;
};

/**
 *  電子報-週報-近期用電量比較
 * api working - 2023/william.C
 */
const getRecentComparison = async ({ startDate }) => {
    const res = await apiRequest('GET', `/main/e-weekly/line-chart?startDate=${startDate}`, null, undefined, true);
    return res;
};

/**
 * 取得最新週報截電建議
 * api working - 2023/william.C
 */
const getAdvice = async () => {
    const res = await apiRequest('GET', '/main/e-weekly/new-advice', undefined, undefined, true);
    return res;
};

/**
 * 知道了
 * api working - 2023/william.C
 */
const knewAdvice = async ({ startDate }) => {
    const formdata = new FormData();
    formdata.set('startDate', startDate);

    const res = await apiRequest('POST', '/main/e-weekly/knew-advice', formdata, undefined, true);
    return res;
};

/**
 * 能源報告-取得週報
 * api working - 2023/william.C
 */
const getWeeklyReport = async ({ month }) => {
    const res = await apiRequest('GET', `/main/e-newspaper/week?month=${month}`, null, undefined, true);
    return res;
};

/**
 * 能源報告-取得哪幾個月有月報
 * api working - 2023/william.C
 * url: https://www.energy-active.org.tw/news
 */
const getMonthlyReport = async () => {
    const res = await apiRequest('GET', '/main/e-newspaper/month', null, undefined, true);
    return res;
};

/*
 * 個資同意
 * api working - 2023/william.C
 */
const setUserInfo = async ({ status }) => {
    const formdata = new FormData();
    formdata.set('status', status);

    const res = await apiRequest('PATCH', '/main/user-info', formdata, undefined, true);
    return res;
};

/**
 * 電器下拉選單
 * api working - 2023/william.C
 */
const getDeviceList = async () => {
    const res = await apiRequest('GET', '/main/device-list', null, undefined, false);
    return res;
};

/**
 * 取得公設能源報告
 * api working - 2023/william.C
 */
const getPublicFacility = async () => {
    const res = await apiRequest('GET', '/main/management/public-facility', undefined, undefined, true);
    return res;
};

/**
 * 取得用戶綁定電器
 * api working - 2023/william.C
 */
const getDeviceInfo = async () => {
    const res = await apiRequest('GET', '/main/device/info', undefined, undefined, true);
    return res;
};

/**
 * 用戶綁定電器
 * api working - 2023/william.C
 */
const deviceBind = async ({ appIdList, socketList }) => {
    const formdata = new FormData();
    formdata.set('appIdList', appIdList);
    formdata.set('socketList', socketList);
    const res = await apiRequest('POST', '/main/device/bind', formdata, undefined, true);
    return res;
};

export {
    // ---- 2022 new API start ----
    apiLogin,
    logout,
    getSurvey,
    setSurvey,
    getSurveyInfo,
    editSurveyInfo,
    passwordForget,
    setMaintenance,
    passwordReset,
    userSetting,
    getYesterday,
    getQRCode,
    getCurrentMon,
    qrCodeVertify,
    getAppliance,
    mobileLogin,
    autoLogin,
    restPassword,
    getHotTopics,
    getWishingPond,
    setGoal,
    setWishingPond,
    getOldTopics,
    getCloudRemoteList,
    updateDeviceOnOffStatus,
    getScheduleList,
    addSchedule,
    updateSchedule,
    deleteSchedule,
    getHistoryScheduleList,
    getYearlyComparison,
    getMonthComparison,
    getWeeklyComparison,
    getRecentComparison,
    knewAdvice,
    getWeeklyReport,
    getMonthlyReport,
    setUserInfo,
    getDeviceList,
    getPublicFacility,
    getDeviceInfo,
    deviceBind,
    getAdvice
    // ---- 2022 new API end ----
};
