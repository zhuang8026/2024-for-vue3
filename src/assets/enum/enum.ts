export const FUN_NAME = {
	DEVICE: 'device',
	DEVICE_DETAIL: 'device-detail',
	DEVICE_ADD: 'device-all',
	DEVICE_EDIT: 'device-edit',
	GATEWAY: 'gateway',
	EVENT: 'event',
	EVENT_TRASH: 'event-trash',
	EVENT_DETAIL: 'event-detail',
	TRASH_DETAIL: 'trash-detail',
	EVENT_NOTIFICATION: 'event-notification-settings',
	MODEL: 'model',
	MODEL_DETAIL: 'model-detail',
	MODEL_CREATE: 'model-create',
	MODEL_REBUILD: 'model-rebuild',
	MODEL_NEW: 'model-new',
	MODEL_RETRAIN: 'model-retrain',
	DASHBOARD: 'dashboard',
	USER_SETTING: 'user-setting',
	PWD_RESET: 'pwd-reset',
	SENSOR_DETECT: 'sensor-detect',
	LOGIN: 'login',
	PWD_FORGET: 'pwd-forget',
	SMTP: 'smtp',
	PERMISSION: 'permission',
	SENSOR_OVERVIEW: 'sensor-overview',
	PWD_SETTING: 'pwd-setting',



};

// for loading Machine
export const COMPONENT_NAME = {
	MAIN: 'main',
	APP: 'app',
};

//頁面類型
export const PAGE_TYPE = {
	MAIN: 'main',
	INPAGE: 'inpage', //內頁
	FULL: 'full', //滿版
	FLEX: 'flexiable', // flexiable 整頁白的
};

export const ENV = {
	DEV: 'DEV',
	PROD: 'PROD',
	STSGING: 'STAGING',
	MOCK: 'MOCK',
	HTTPS: 'HTTPS',
	DEMO: 'DEMO',
	TEST: 'TEST',
};

// 全站使用POPUP
export const POPUP = {
	NORMAL: 'normal',
	// Equipment
	DEVICE_DELETE: 'device-delete',
	DEVICE_LICENSE: 'device-license',
	DEVICE_REMIND: 'device-remind',
	DEVICE_REBUILD: 'device-rebuild',
	DEVICE_SAVE: 'device-save',
	DEVICE_CLEAN_SENSOR: 'device-clean-sensor',
	DEVICE_CLEAN_EQUIPMENT: 'device-clean-equipment',
	DEVICE_CLEAN_COMPONENT: 'device-clean-component',
	DEVICE_REMOVE_LICENSE: 'device-remove-license',
	RULES_SELECT: 'rules-select',
	LICENSE_SELECT: 'license-select',
	// gateway
	GATEWAY_INPUT: 'gateway-input',
	GATEWAY_EDIT: 'gateway-edit',
	GATEWAY_DELETE: 'gateway-delete',
	// model
	MODEL_TIME: 'model-time',
	MODEL_STOP: 'model-stop-train',
	MODEL_DEL_REMINDER: 'model-del-reminder',
	MODEL_SWITCH: 'model-switch',
	MODEL_EVENT_LABEL: 'model-event-label',
	// event
	EVENT_TO_TRASH: 'event-to-trash',
	EVENT_ALL_TRASH: 'event-all-trash',
	// event trash
	EVENT_TRASH_RESET: 'event-trash-reset',
	EVENT_TRASH_HINT: 'event-trash-hint',
	EVENT_TRASH_DELETE: 'event-trash-delete',
	// logout
	LOGOUT: 'logout',
	// dashboard
	DASHBOARD_WIDGETS: 'dashboard-widgets',
	// reset pwd
	PWD_RESET: 'pwd-reset',
	PWD_SUCCESS: 'pwd-success',
	// SMTP
	SMTP_SETTING: 'smtp-setting',
	// permission
	PERMISSION_SAVE: 'permission-save',
	PERMISSION_SUCCESS: 'permission-success',
	PERMISSION_RESENT: 'permission-resent',
	PERMISSION_DELETE: 'permission-delete',
	PERMISSION_EDIT: 'permission-edit',
	// pwd-forget
	PWD_FORGET: 'pwd-forget',
	API_ERROR_GLOBAL: 'api-error-global',
	REMIND_DATA_NOT_FULL: 'remind-data-not-full',
	SENSOR_DEL: 'sensor-del',
	SENSOR_LIC_EXPIRED: 'sensor-lic-expired',
	SENSOR_DISCONNECT: 'sensor-disconnect',
	SENSOR_BUSY: 'sensor-busy',
	SENSOR_DEL_ERROR: 'sensor-del-error',
	SENSOR_LIVE_DATA: 'sensor-live-data',
	SENSOR_DELETION_ERROR: 'sensor-deletion-error',
	// API Error
	API_NOAUTH: 'no-auth',
	API_TOKEN: 'token',
	API_LOGIN_ERROR: 'login-error',
	API_EMAIL_ERROR: 'email-error',
	API_PWD_INCORRECT: 'pwd-incorrect',
	API_LOCATION_DEL: 'location-del',
	API_NO_ACCOUNT: 'api-no-account',
};

export const POPUP_BTN = {
	CONFIRM: 'confirm',
	CANCEL: 'cancel',
};

export const DEVICE_MODE = {
	EDIT: 'edit',
	SHOW: 'show', // for display (device detail)
};

export const HEAD_ID = {
	LOCATION: 'location',
	DEVICE: 'device',
	EQUIP: 'equipment',
	COMPONENT: 'component',
	SENSOR_POS: 'sensorPos',
	SENSOR_MONITOR: 'sensorMonitor',
	STATUS: 'status',
	SENSOR_ID: 'sensorId',
	BRAND: 'brand',
	MODEL_STATUS: 'model-status',
	CONNECT: 'connect-status',
	DATE: 'date',
	FALI_MODE: 'faliure-mode',
	EVENT_TYPE: 'event-type',
	PROCESS_STATUS: 'process-status',
	COMP: 'component',
	TIME_START: 'start-time',
	TIME_END: 'end-time',
	CP_NAME: 'componentName',
	CP_MODEL: 'componentModel',
	EQ_NAME: 'equipmentName',
	EQ_MODEL: 'equipmentModel',
	INSTALL_LOCATION: 'installLocation',  // event use
	EVENTTYPE: 'eventType',  // event use
	ANOMALY_PATTERN: 'anomalyPattern',  // event use
	TIMESTART: 'startTime', // event use
	TIMEEND: 'endTime',  // event use
	PROCESSING_STATUS: 'processingStatus',  // event use
	ID: 'id',
	MODELID: 'modelId',
	ROLE: 'role',
};

export let TABLE_TEXT_TYPE = {
	DEFAULT: 'default',
	STATUS_1: 'status:1',
	STATUS_2: 'status:2',
};

export let MODEL = {
	STOP: 'terminate',
	DEL: 'delete',
	RETRAIN: 'retrain',
	ADD: 'add',
	SWITCH: 'switch',
};

export let API_KEY = {
	LOCATION: 'location',
	EQUIP_NAME: 'equipmentName',
	EQUIP_MODEL: 'equipmentModel',
	COMP_NAME: 'componentName',
	COMP_MODEL: 'componentModel',
	INSTALL_LOCATION: 'installLocation',
	MODEL: 'model',
	MODEL_ID: 'modelId',
	MODEL_NAME: 'modelName',
};

export let CHART_TYPE = {
	CATEGORY: 'category',
	DATETIME: 'datetime',
	NUMBER: 'numeric',
	DONUT: 'donut',
};

export let FORMAT_DATE = {
	DEFAULT: 'YYYY/MM/DD',
	MONTH_EN: 'YYYY MMMM DD', // 轉換時月份用英文
	NO_YEAR: 'MM/DD HH:mm',

};

export let ACTION = {
	CONFIRM: 'confirm',
	DEL: 'del',
	SELECT: 'select',
}; //end: ACTION


export let BRAND = {
	KANGSHI: 'KS',
	ITRI: 'ITRI',
	SPLIT_SIGN: '_', //brand id split sign ex: KS-001, ITIR-456
}

export let DEVICE_TYPE = {
	SENSOR: 'sensor',
	COMPONENT: 'component',
	EQUIPMENT: 'equipment',
	COMP_SENSOR: 'comp-sensor',
}

export let GLOBAL_SIGN = {
	NO: '--',
	NA: 'N/A',
}


export let MODEL_TYPE = {
	NEW: 'new',
	CREATED: 'created',
	RETRAIN: 'retrun',
}

export let MODEL_STATUS = {
	UNCREATE: 'Uncreate',
	COLLECTING: 'Collecting',
	BUILDING: 'Building',
	WAITING: 'Waiting',
	CREATED: 'Created',
	RETRAINING: 'Retraining',
	NEEDREBUILD: 'Need Rebuild',
	FAIL: 'Fail'
}

export let PROCESS_STATUS = {
	PENDDING: 'pending',
	PROCESSING: 'processing',
	SLOVED: 'solved',
}

export let PROCESS_STATUS_TEXT = {
	PENDDING: 'Pending',
	PROCESSING: 'Processing',
	SLOVED: 'Solved',
}

export let POS = {
	X: 'x',
	Y: 'y',
	Z: 'z',
}
export let SPEED = {
	NORMAL: 'normal',
	PLUS: 'plus'
}

export const POWER_UNIT = {
	KW: 'kW',
	MW: 'MW',
}

export const COOKIE_NAME = {
	TOKEN: 'phmtoken',

}


export const ROLE = {
	ADMIN: 'admin',
	POWERUSER: 'poweruser',
	USER: 'user',
	ALL: 'all'
}
