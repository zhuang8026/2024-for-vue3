import { Ref, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { UiModal, UiButton, Icon, UiRadio, UiInput, UiCheckbox, UiSelect, UiTable } from 'ais-ui';
import { HEAD_ID, MODEL, POPUP, POPUP_BTN, POS, SPEED } from '@/assets/enum/enum';
import { useGlobalStore } from '@/store';
import { storeToRefs } from 'pinia';
import { uuid } from 'vue-uuid';
import { btnBorderMainStyle, btnMainStyle } from './btn-utils';
import { modalControl, modalStatusListener } from '@/utils/modalMixin';

import { dateTimeHandle } from '@/utils/timeUtils';
import { EVENT_TYPE, EVENT_TYPE_TEXT } from '@/utils/optionStatic';
import { axisTItleFFT, posList, showFFTData, speedList, tootipTitleFFT } from '@/utils/chart';

// components
import uiLineChart from "@/components/ui/ui-line-chart/index.vue";
import ModelRetrain from '@/view/model/model-retrain/index.vue';
import SensorLiveData from '@/view/devices/sensor-live-data/index.vue';

export default {
	name: 'msg',
	components: {
		UiModal,
		UiButton,
		Icon,
		UiRadio,
		UiInput,
		UiCheckbox,
		UiSelect,
		UiTable,
		uiLineChart,
		ModelRetrain, // In Service use
		SensorLiveData, // device use
	},
	props: {},
	setup() {
		let router = useRouter();

		let isOpenModal = ref(false);
		// let modalType = ref(POPUP.DEVICE_REMOVE_LICENSE);
		const store = useGlobalStore();
		console.log('store', store);
		let { isModalOpen, modalType, modalInputData } = storeToRefs(store);
		console.log('isModalOpen', isModalOpen.value);

		let isChecking = ref(false);
		let createGateway = reactive({
			data: {
				name: '',
				ipAddress: '',
				account: '',
				password: '',
			},
		});
		let deleteList = ref([]);

		let confirmSave = {
			text: 'Save',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: 'full',
			wd: 'auto',
		};
		let btnCancel = {
			text: 'Return',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: 'full',
			wd: 'auto',
		};
		let btnConfirm = {
			text: 'Save',
			disable: true,
			theme: '2',
			color: 'transprent',
			type: 'full',
			wd: 'auto',
		};

		// event (select)
		let eventDelete = {
			text: 'Confirm',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: '',
			wd: 'auto',
		};
		let eventCancel = {
			text: 'Cancel',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: 'full',
			wd: 'auto',
		};

		// event (all)
		let deleteAll = {
			text: 'Delete All',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: '',
			wd: 'auto',
		};
		let goToCheck = {
			text: 'Check Trash',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: 'full',
			wd: 'auto',
		};

		// event trash (reset)
		let canReset = {
			text: 'Confirm',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: 'full',
			wd: 'auto',
		};
		let resetCancel = {
			text: 'Cancel',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: '',
			wd: 'auto',
		};
		// event trash (reset hint)
		let hintToTrash = {
			text: 'Back to recycle bin',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: '',
			wd: 'auto',
		};
		let hintToEvent = {
			text: 'Visit Event Log',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: 'full',
			wd: 'auto',
		};

		// event trash (forever delete)
		let trashConfirm = {
			text: 'Confirm',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: 'full',
			wd: 'auto',
		};
		let trashCancel = {
			text: 'Cancel',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: '',
			wd: 'auto',
		};

		// Select license to bind
		let licenseOpts = ref([
			{
				name: '001 dateline 2024/12/31',
				val: '1',
				disable: false,
			},
			{
				name: '002 dateline 2024/12/31',
				val: '2',
				disable: false,
			},
		]);
		let licenseSelected = ref('1');

		/// permission
		// let savePermission = reactive({val});

		// permission btn fun
		// let permissionSave
		// let permissionResent
		// let permissionDelete

		// Gateway
		let gatewayCancelBtn = {
			text: 'Return',
			disable: false,
			theme: '2',
			color: 'transprent',
			type: '',
			wd: 'auto',
		}

		let onClickBindLicense = (selected) => {
			let _selected = selected;
			store.setModalOutputData({ val: _selected });
			console.log('onClickBindLicense', _selected);
		}; //end: onClickBindLicense

		let onClickModal = () => {
			isOpenModal.value = true;
			// isModalOpen.value = true;
			store.setIsModalOpen(true);
		}; //end: onClickModal

		let onClickCancel = () => {
			console.log('onClickCancel');
			store.setIsModalOpen(false);
		}; //end: onClickCancel

		/**
		 * btn 點擊類型
		 * @param type
		 */
		let _msgBtnHandle = (type: string = POPUP_BTN.CANCEL) => {
			let _btnName = `${type}-${uuid.v4()}`;
			store.setModalBtnType(_btnName);
		}; //end: msgBtnHandle

		// 示範怎麼用
		// 處理test popup
		let testData = reactive({});
		let testOutputData = ref('');
		let handleTestData = () => {
			Object.assign(testData, store.modalInputData);
		}; // end: handleTestData
		let onClickTestCancel = () => {
			console.log('onClickTestCancel', testOutputData.value);
			let _data = { data: testOutputData.value };
			console.log('_data', _data);
			store.setModalOutputData(_data);
			_msgBtnHandle(POPUP_BTN.CONFIRM);
		}; // end: onClickTestCancel

		// [Cancel] Gateway cancel btn
		let gatewayCancel = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[[Gateway_Cancel] ->', createGateway.data);
			let empty = { name: '', ipAddress: '', account: '', password: '' };
			createGateway.data = empty;
			let _data = { data: createGateway.data };
			store.setModalOutputData(_data);
		}; // end

		// [Create] Gateway create data btn
		let gatewayCreate = () => {
			console.log('0.2_[[Gateway_Create] ->', createGateway.data);
			let _data = { data: createGateway.data };
			store.setModalOutputData(_data);
			_msgBtnHandle(POPUP_BTN.CONFIRM);
		}; // end

		// [Edit] Gateway create data btn
		let gatewayEdit = () => {
			console.log('0.2_[[Gateway_Edit] ->', createGateway.data);
			let _data = { data: createGateway.data };
			store.setModalOutputData(_data);
			_msgBtnHandle(POPUP_BTN.CONFIRM);
		}; // end

		// [Delete] Gateway delete data btn
		let gatewayDelete = () => {
			console.log('0.2_[Confirm_Delete_ID] ->', store.modalInputData);
			let _data = { data: deleteList.value };
			store.setModalOutputData(_data);
			_msgBtnHandle(POPUP_BTN.CONFIRM);
		}; // end

		// [Delete] Event select Delete
		let eventSelectDelete = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[Event_Delete_All] ->:', store.modalInputData);
			// let empty = { name: '',ipAddress: '', account: '', password: ''};
			// createGateway.data = empty;
			let _data = { ischeck: true, trash_max: false };
			let checkTrashCount = store.modalInputData.count + store.modalInputData.trash_count; // Number
			console.log('checkTrashCount ->', checkTrashCount);
			if (checkTrashCount >= 300) {
				_data.ischeck = false; // can't call 'delete api'
				_data.trash_max = true; // trash number max 300
			}
			store.setModalOutputData(_data);
		}; // end

		// [Delete] Event Delete All
		let eventDeleteAll = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[Event_Delete_All] ->');
			// let empty = { name: '',ipAddress: '', account: '', password: ''};
			// createGateway.data = empty;
			let _data = { ischeck: true };
			store.setModalOutputData(_data);
		}; // end

		// [Cancel] Event Go To Check
		let eventGoToCheck = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[Event_Go_To_Check]');
			// let empty = { name: '',ipAddress: '', account: '', password: ''};
			// createGateway.data = empty;
			let _data = { ischeck: false };
			store.setModalOutputData(_data);
		}; // end

		// [Cancel] Event Go To Trash
		let eventGoToTrash = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[Trash_go_to_Trash]');
			router.push(`/main/event-trash`); // link to Event
			let _data = { ischeck: false };
			store.setModalOutputData(_data);
		}; // end

		// [Reset] Trash can reset
		let trashCanReset = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[Trash_Can_Reset] ->');
			// let empty = { name: '',ipAddress: '', account: '', password: ''};
			// createGateway.data = empty;
			let _data = { ischeck: true };
			store.setModalOutputData(_data);
		}; // end

		// [Reset] Trash can not reset
		let trashNotReset = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[Trash_Can_Not_Reset] ->');
			// let empty = { name: '',ipAddress: '', account: '', password: ''};
			// createGateway.data = empty;
			let _data = { ischeck: false };
			store.setModalOutputData(_data);
		}; // end

		// [Hint] Trash go to Event Log
		let trashToEventList = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[Trash_go_to_event_list]');
			router.push(`/main/event`); // link to Event
			// router.push({ name: 'event'});
		}; // end

		// [Delete] Trash forver delete Event Log
		let trashForeverDelete = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[Trash_Forver_Delete_Event] ->');
			// let empty = { name: '',ipAddress: '', account: '', password: ''};
			// createGateway.data = empty;
			let _data = { ischeck: true };
			store.setModalOutputData(_data);
		}; // end

		// [Cancel] Trash can not delete
		let trashNotDelete = () => {
			// createGateway.data[type] = val;
			console.log('0.2_[Trash_Can_Not_Delete] ->');
			// let empty = { name: '',ipAddress: '', account: '', password: ''};
			// createGateway.data = empty;
			let _data = { ischeck: false };
			store.setModalOutputData(_data);
		}; // end

		// type: POPUP_BTN
		// val: output data
		let permissionBtn = (type) => {
			let outData = [];
			if (type == POPUP_BTN.CONFIRM) {
				console.log('0.2_[PERMISSION_SAVE] ->', store.modalInputData.val);
				outData = store.modalInputData.val;
				store.setModalOutputData({ val: outData });	// 資料傳出
			} else if (type == POPUP_BTN.CANCEL) {
				// cancel 就清空資料
				store.setModalOutputData({ val: outData });	// 資料傳出
			}

		};

		const permissionResent = () => {
			let outData = [];
			outData = store.modalInputData.val;
			store.setModalOutputData({ val: outData });	// 資料傳出
		};

		const roleType = (role: string) => {
			let str = role.toLowerCase();
			switch (str) {
				case 'admin':
					return 'Admin';
				case 'poweruser':
					return 'Power User';
				case 'user':
					return 'User';
				default:
					return '';
			}
		};

		// 開啟POPUP的資料處理
		watch(
			() => store.isModalOpen, //isModalOpen改變會觸發
			(val) => {
				let _isOpen = val;
				if (_isOpen) {
					store.setModalBtnType('');
					//開啟POPUP 各POPUP處理
					switch (store.modalType) {
						case POPUP.NORMAL:
							handleTestData();
							break;
						// Gateway新增
						case POPUP.GATEWAY_INPUT:
							console.log('0.1_[Gateway_Add] ->', store.modalInputData);
							let empty = {
								name: '',
								ipAddress: '',
								account: '',
								password: '',
							};
							Object.assign(createGateway, { data: empty });
							break;
						// Gateway修改
						case POPUP.GATEWAY_EDIT:
							console.log('0.1_[Gateway_Edit] ->', store.modalInputData);
							Object.assign(createGateway, { data: store.modalInputData, });
							break;
						// Gateway刪除
						case POPUP.GATEWAY_DELETE:
							console.log('0.1_[Gateway_Delete_ID] ->', store.modalInputData);
							deleteList.value = store.modalInputData.deleteList;
							break;
						// event soft delete
						case POPUP.EVENT_TO_TRASH:
							console.log('0.1_[Event_Soft_Delete] ->', store.modalInputData);
							// deleteList.value = store.modalInputData.deleteList;
							break;
						// model time
						case POPUP.MODEL_TIME:
							modelTimeVal.value = '1';
							break;
						// License
						case POPUP.LICENSE_SELECT:
							let { licOpts, licSelected } = modalInputData.value;

							licenseOpts.value = [...licOpts];
							licenseSelected.value = licSelected;
							console.log('modal license select', modalInputData);
							console.log('val', licOpts, licSelected);
							break;
						// dashboard拿inputData資料塞回checkbox裡面
						case POPUP.DASHBOARD_WIDGETS:
							dashboardCheck.data = []
							let { dashboardOptions } = modalInputData.value
							dashboardCheck.data.push(...dashboardOptions)
							break;
						// permission 修改
						case POPUP.PERMISSION_SAVE:
							console.log('0.1_[PERMISSION_SAVE] ->', store.modalInputData.val);
							// GET store.modalInputData.val
							// SET store.setModalOutputData(val);
							break;
						// permission 修改
						case POPUP.PERMISSION_SUCCESS:
							console.log('0.1_[PERMISSION_SUCCESS] ->', store.modalInputData.val);
							// GET store.modalInputData.val
							// SET store.setModalOutputData(val);
							break;
						// permission 刪除
						case POPUP.PERMISSION_DELETE:
							console.log('0.1_[PERMISSION_DELETE] ->', store.modalInputData);
							break;
						// permission Resent 送出提示Email
						case POPUP.PERMISSION_RESENT:
							console.log('0.1_[PERMISSION_RESENT] ->', store.modalInputData.val);
							break;
						case POPUP.MODEL_EVENT_LABEL:
							console.log('MODEL_EVENT_LABEL')
							handleRetrainModel(store.modalInputData);
							break;
						case POPUP.SENSOR_LIVE_DATA:
							console.log('SENSOR_LIVE_DATA:', store.modalInputData);

							break;
						default:
							console.log('notice: msg type error.');
							break;
					}
				}
			}, // end: watch val
			{
				deep: true,
			}
		);

		// 創建新的Gateway資料時，欄位是否有空值
		watch(
			[
				() => createGateway.data.name,
				() => createGateway.data.ipAddress,
				() => createGateway.data.account,
				() => createGateway.data.password,
			],
			(val) => {
				isChecking.value = val.includes('');
				btnConfirm.disable = isChecking.value;
			}
		);

		// AI Model

		let modelTimeOpts = [
			{
				name: '1 Day',
				val: '1',
				disabled: false,
			},
			{
				name: '3 Days',
				val: '3',
				disabled: false,
			},
			{
				name: '5 Days',
				val: '5',
				disabled: false,
			},
			{
				name: '7 Days',
				val: '7',
				disabled: false,
			},
		];

		let modelTimeVal = ref('1');

		let onChangeModelTime = (val) => {
			let _val = val;
			modelTimeVal.value = _val;
			console.log('onChangeModelTime', _val);
		}; //end: onChangeModelTime

		let validList = [
			{
				name: '8-16characters',
				val: '0',
				disabled: false,
			},
			{
				name: 'include numbers',
				val: '1',
				disabled: false,
			},
			{
				name: 'include uppercase and lowercase',
				val: '2',
				disabled: false,
			},
			{
				name: 'include special characters',
				val: '3',
				disabled: false,
			},
		];

		// click modal btn general handle
		let modalBtnClick = (action, btnName = POPUP_BTN.CONFIRM, val = '') => {
			let _action = action;
			console.log('msg', val)
			if (val != '') {
				console.log('val', val)
				// store.setModalOutputData(modelTimeVal.value);
				store.setModalOutputData(val);
			}
			if (_action == POPUP.LICENSE_SELECT) {
				onClickBindLicense(val);
			}
			if (_action == POPUP.PWD_FORGET) {
				router.push({ name: 'login' })
			}
			if (_action === POPUP.EVENT_TO_TRASH) {
				eventGoToCheck();
			}
			if (_action === POPUP.MODEL_EVENT_LABEL) {

			}
			if (_action === POPUP.SENSOR_DELETION_ERROR) {
				onClickCancel();
			}

			_msgBtnHandle(btnName);
			console.log('modalBtnClick', action);
		}; // end




		// //#region  Retrain Model

		// // Retrain Model
		// let tableHead = reactive([{
		// 	id: HEAD_ID.TIMESTART,
		// 	txt: 'Event Start Time'
		// },
		// {
		// 	id: HEAD_ID.TIMEEND,
		// 	txt: 'Event Stop Time'
		// },
		// {
		// 	id: HEAD_ID.EVENTTYPE,
		// 	txt: 'Event Type'
		// },
		// {
		// 	id: HEAD_ID.PROCESSING_STATUS,
		// 	txt: 'Status',
		// },
		// ])

		// let tableData = ref([{
		// 	id: '001',
		// 	isCheck: true,
		// 	isDisable: false,
		// 	detail: [
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: 'Motor itr44t',
		// 			type: 'default',
		// 			edit: 'select', // none, input, select
		// 			selectId: {
		// 				id: 'id-1',
		// 				name: 'Normal',
		// 				disabled: false,
		// 			}, // select 的選項
		// 		},
		// 		{
		// 			txt: 'Pending',
		// 			type: 'default'
		// 		},
		// 	]
		// },
		// {
		// 	id: '002',
		// 	isCheck: true,
		// 	isDisable: false,
		// 	detail: [
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: 'Motor itr44t',
		// 			type: 'default',
		// 			edit: 'select', // none, input, select
		// 			selectId: {
		// 				id: 'id-1',
		// 				name: 'Normal',
		// 				disabled: false,
		// 			}, // select 的選項
		// 		},
		// 		{
		// 			txt: 'Pending',
		// 			type: 'default'
		// 		},
		// 	]
		// },
		// {
		// 	id: '003',
		// 	isCheck: true,
		// 	isDisable: false,
		// 	detail: [
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: 'Motor itr44t',
		// 			type: 'default',
		// 			edit: 'select', // none, input, select
		// 			selectId: {
		// 				id: 'id-1',
		// 				name: 'Normal',
		// 				disabled: false,
		// 			}, // select 的選項
		// 		},
		// 		{
		// 			txt: 'Pending',
		// 			type: 'default'
		// 		},
		// 	]
		// }, {
		// 	id: '004',
		// 	isCheck: true,
		// 	isDisable: false,
		// 	detail: [
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: 'Motor itr44t',
		// 			type: 'default',
		// 			edit: 'select', // none, input, select
		// 			selectId: {
		// 				id: 'id-1',
		// 				name: 'Normal',
		// 				disabled: false,
		// 			}, // select 的選項
		// 		},
		// 		{
		// 			txt: 'Pending',
		// 			type: 'default'
		// 		},
		// 	]
		// }, {
		// 	id: '005',
		// 	isCheck: true,
		// 	isDisable: false,
		// 	detail: [
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: '3/17 16:30',
		// 			type: 'default'
		// 		},
		// 		{
		// 			txt: 'Motor itr44t',
		// 			type: 'default',
		// 			edit: 'select', // none, input, select
		// 			selectId: {
		// 				id: 'id-1',
		// 				name: 'Normal',
		// 				disabled: false,
		// 			}, // select 的選項
		// 		},
		// 		{
		// 			txt: 'Pending',
		// 			type: 'default'
		// 		},
		// 	]
		// },
		// ])

		// let optionsRetrain = reactive({
		// 	options: [
		// 		{ id: '21', name: '21', disabled: false },
		// 		{ id: '36', name: '36', disabled: false },
		// 	],
		// 	selected: { id: '36', name: '36', disabled: false },
		// });

		// //#region  onSelectRetrainNum
		// let onSelectRetrainNum = (val) => {
		// 	console.log('onSelectRetrainNum', val);
		// 	let num = val.id;

		// } //end: onSelectRetrainNum


		// // for table 要長得下拉選單
		// // key -> 第幾欄 , value -> 選項
		// let tableDataOptions = reactive({
		// 	2: [{
		// 		id: EVENT_TYPE.NORMAL,
		// 		name: EVENT_TYPE_TEXT.NORMAL,
		// 		disabled: false,
		// 	},
		// 	{
		// 		id: EVENT_TYPE.ABNORMAL,
		// 		name: EVENT_TYPE_TEXT.ABNORMAL,
		// 		disabled: false,
		// 	}],
		// })

		// //#region FFT


		// // todo: retrain  and relabel and change total

		// let dataFFT: Ref<Array<any>> = ref(
		// 	[
		// 		// 	{
		// 		// 	name: 'dd',
		// 		// 	data: [
		// 		// 		[0, 0.1],
		// 		// 		[50, 0.6],
		// 		// 		[100, 1.3],
		// 		// 		[150, 3],
		// 		// 		[200, 2.8],
		// 		// 		[150, 1.1],
		// 		// 		[200, 0.6],
		// 		// 		[300, 0.9],
		// 		// 		[400, 1.6],
		// 		// 		[500, 1.8],
		// 		// 	]
		// 		// },

		// 	],
		// )



		// //#endregion FFT
		// let currentPos = ref(POS.X);
		// let onClickPos = async (val) => {
		// 	currentPos.value = val;
		// 	dataFFT.value = await showFFTData(retrainSensorId.value, retrainTimeRange.value[0], retrainTimeRange.value[1], currentPos.value, currentSpeed.value)
		// }//end: onClickPos

		// let currentSpeed = ref(SPEED.NORMAL);
		// let onClickSpeed = async (val) => {
		// 	currentSpeed.value = val
		// 	dataFFT.value = await showFFTData(retrainSensorId.value, retrainTimeRange.value[0], retrainTimeRange.value[1], currentPos.value, currentSpeed.value)
		// } //onClickSpeed

		// // //#region  handleRetrainModel
		let retrainSensorId = ref('');
		let retrainModelId = ref('');
		let retrainData = ref([]);
		let handleRetrainModel = async (ev) => {
			let _ev = ev.val;
			let _data = _ev.data;
			retrainSensorId.value = _ev.sensorId;
			retrainModelId.value = _ev.modelId;
			retrainData.value = _data;
			console.log('handleRetrainModel ev', _ev);
			// 	// handle data to retain data diesplay
			// 	tableData.value = [];
			// 	_data.forEach((item, index) => {
			// 		let _detail = [{
			// 			id: HEAD_ID.TIMESTART,
			// 			txt: dateTimeHandle(item.startDateTime),
			// 			originTime: item.startDateTime,  // for record the origin time
			// 			type: 'default'
			// 		}, {
			// 			id: HEAD_ID.TIMEEND,
			// 			txt: dateTimeHandle(item.endDateTime),
			// 			originTime: item.endDateTime,
			// 			type: 'default',
			// 		}, {
			// 			id: HEAD_ID.EVENTTYPE,
			// 			txt: item.eventType,
			// 			type: 'default',
			// 			edit: 'select',
			// 			selectId: {
			// 				id: item.eventType === EVENT_TYPE.NORMAL ? EVENT_TYPE.NORMAL : EVENT_TYPE.ABNORMAL,
			// 				name: item.eventType === EVENT_TYPE.NORMAL ? EVENT_TYPE_TEXT.NORMAL : EVENT_TYPE_TEXT.ABNORMAL,
			// 				disabled: false,
			// 			}
			// 		}, {
			// 			id: HEAD_ID.PROCESSING_STATUS,
			// 			txt: item.processStatus,
			// 			type: 'default'
			// 		}] //end: _detail

			// 		tableData.value.push({
			// 			id: item.sensorDataId,
			// 			isCheck: false,
			// 			isDisable: false,
			// 			detail: [..._detail]
			// 		})
			// 		if (index == 0) {
			// 			retrainTimeRange.value[0] = item.startDateTime;
			// 			retrainTimeRange.value[1] = item.endDateTime;
		}




		// 	}) //end: forEach
		// 	console.log('tableData', tableData.value);
		// 	dataFFT.value = await showFFTData(retrainSensorId.value, retrainTimeRange.value[0], retrainTimeRange.value[1], currentPos.value, currentSpeed.value)




		// 	// tableData.value.forEach((item, index) => {})


		// }
		// //#endregion handleRetrainModel



		// let selectedEventArr = ref([]);
		// let retrainTimeRange: any = ref([]);

		// //#region  handle retrain model FFT
		// let handleRetrainDataFFT = async (val) => {
		// 	console.log('handleRetrainDataFFT', val);
		// 	let _val = val;
		// 	let _detail = _val.detail
		// 	let timeStart = _detail.filter(item => item.id == HEAD_ID.TIMESTART)[0];
		// 	let timeEnd = _detail.filter(item => item.id == HEAD_ID.TIMEEND)[0];
		// 	console.log('timeStart', timeStart.originTime, 'timeEnd', timeEnd.originTime);
		// 	console.log('retrainSensorId', retrainSensorId.value);
		// 	retrainTimeRange.value[0] = timeStart.originTime;
		// 	retrainTimeRange.value[0] = timeEnd.originTime;
		// 	dataFFT.value = await showFFTData(retrainSensorId.value, timeStart.originTime, timeEnd.originTime)
		// 	console.log('dataFFT.value', dataFFT.value)
		// }
		// //#endregion handle retrain model FFT



		// //#endregion Retrain Model

		//end of AI Model

		//dashboard management

		let dashboardEventList: Array<any> = reactive([
			{
				name: 'Abnormal equipment ratio by locations',
				val: 'a',
				disabled: false,
			},
			{
				name: 'Today - Abnormal events',
				val: 'b',
				disabled: false,
			},
			{
				name: 'This Week - Abnormal events',
				val: 'c',
				disabled: false,
			},
			{
				name: 'This Month - Abnormal events',
				val: 'd',
				disabled: false,
			},
			{
				name: 'This Year - Abnormal events',
				val: 'e',
				disabled: false,
			},
			{
				name: 'This Year Event ranking by equipment',
				val: 'f',
				disabled: false,
			},
			{
				name: 'This Month - Abnormal events by equipment',
				val: 'g',
				disabled: false,
			},
			{
				name: 'Number of pending events',
				val: 'h',
				disabled: false,
			},
			// 20230830 會議結論: always open pending Event log
			// {
			// 	name: 'Pending Event Log',
			// 	val: 'i',
			// 	disabled: false,
			// },
			{
				name: 'Number of connected sensors',
				val: 'j',
				disabled: false,
			},
			{
				name: 'Number of abnormal connected sensors',
				val: 'k',
				disabled: false,
			},
			{
				name: 'sensor連線異常機台資訊',
				val: 'l',
				disabled: false,
			},
		]);

		let dashboardCheck = reactive({ data: [] });

		// end of dashboard management

		//#region MODEL_EVENT_LABEL
		let isCheckAll = ref(true);

		return {
			onClickModal,
			onClickCancel,
			POPUP,
			isOpenModal,
			modalType,
			// device
			licenseOpts,
			licenseSelected,
			onClickBindLicense,

			confirmSave,
			btnCancel,
			btnConfirm,
			isModalOpen,
			modalInputData,
			onClickTestCancel, // for test  todo - can be deleted
			testData, // for test  todo - can be deleted
			testOutputData,

			// --- Gateway use ---
			isChecking, // save->按鈕使用
			createGateway, // 新增->資料
			gatewayCancel, // 取消->btn
			gatewayCreate, // 新增->btn
			gatewayEdit, // 修改->btn
			gatewayDelete, // 確認刪除
			gatewayCancelBtn, // Return按鈕樣式

			// --- Event use ---
			eventDelete,
			eventCancel,
			deleteAll,
			goToCheck,
			eventSelectDelete, // soft delete
			eventDeleteAll,
			eventGoToCheck,
			eventGoToTrash,

			// --- Event Trash use ---
			resetCancel,
			canReset,
			hintToTrash,
			hintToEvent,
			trashCancel,
			trashConfirm,
			trashCanReset,
			trashNotReset,
			trashToEventList,
			trashNotDelete,
			trashForeverDelete,

			// --- Model use ---
			modelTimeOpts,
			modelTimeVal,
			onChangeModelTime,
			validList,
			check: '0',
			btnMainStyle,
			btnBorderMainStyle,
			modalBtnClick,
			MODEL,
			POPUP_BTN,
			// optionsRetrain,
			// onSelectRetrainNum,
			// tableData,
			// tableHead,
			// tableDataOptions,
			tootipTitleFFT,
			axisTItleFFT,
			// dataFFT,

			// --- dashboard use ---
			dashboardEventList,
			dashboardCheck,

			// --- permission use ---
			roleType,
			permissionResent,
			permissionBtn,

			// --- model event label ---
			isCheckAll,
			// retrain
			posList,
			speedList,
			// onClickSpeed,
			// onClickPos,
			// currentPos,
			// currentSpeed,


			// handleRetrainDataFFT,
			// selectedEventArr,
			retrainSensorId,
			retrainModelId,
			retrainData,

		};
	},
};
