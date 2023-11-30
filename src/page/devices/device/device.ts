// import { apiGetEquipment } from "@/api/api";
import { Ref, getCurrentInstance, onMounted, reactive, ref, watch } from 'vue';
import { useGlobalStore } from '@/store';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
export default {
    name: 'device',
    components: {},
    setup() {
        const store = useGlobalStore();
        const router = useRouter();
        // let { isModalOpen, modalType } = storeToRefs(store);
        let datas: Ref<Array<any>> = ref([]);
        let datasStore: Array<any> = reactive([]); // 存完整的API資料
        let datasHead = ref([]);
        let tableHeader: Ref<Array<Object>> = ref([]);
        let isCheckAll = ref(false); // default: 非全選

        return {}; //end: return
    }
};
