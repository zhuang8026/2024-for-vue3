export const CONNECT_STATUS = {
	CONNECT: 'Connected',
	DISCONNECTD: 'Disconnected',
}


export const MODEL_STATUS = {
	CREATING: 'Creating',
	CREATED: 'Created',
	PENDING: 'Pending',

}


export const API_ERROR = {
	ERR_NETWORK: 'ERR_NETWORK',
}

export const EQUIP_TYPE_STATUS = {
	FINISH: 'Finish',
	UNFINISH: 'Unfinished',

}

// for model status in model list
export const API_MODEL_STATUS = {
	COLLECTING: 'collecting',
	BUILDING: 'building',
	WAITING: 'waiting',
	RECOLLECTING: 're-collecting',
	REBUILDING: 're-building',
	REWAITING: 're-waiting',
	CREATED: 'created',
	RETRAINING: 'retraining',
	NEEDREBUILD: 'need-rebuild',
	FAIL: 'build-fail',
}


// for model API URL new, created, pending
export const API_MODEL_TYPE_URL = {
	NEW: 'new',
	CREATE: 'created',
	PENDING: 'pending',
}

export const SENSORDATA_TYPE = {
	ACC: 'Acc',
	VEL: 'Vel',
}

export const SENSORDATA_AXIS = {
	X: 'x',
	Y: 'y',
	Z: 'z',
}

export const API_NAME = {
	GET_DEVICE: 'device',
	GET_SENSOR_LIVE_DATA: 'sensorLiveData',
	LOGIN: 'login',
	PWD_CHANGE: 'pwdChange',
	LOCATION_DEL: 'location-del',
	PWD_FORGET: 'pwdForget',
}