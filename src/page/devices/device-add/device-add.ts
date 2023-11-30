import { useRoute, useRouter } from 'vue-router';
import { onMounted, reactive, ref, watchEffect, watch, computed, Ref } from 'vue';
import { uuid } from 'vue3-uuid';
import { useGlobalStore } from '@/store';
import { storeToRefs } from 'pinia';

export default {
    name: 'device-add',
    components: {},
    props: {
        outsideValue: {
            type: Object,
            default: {}
        }
    },

    // desc: 在路由尚未進入該元件時被調用
    beforeRouteEnter(to, from, next) {
        // to: 將要進入的目標路由的資訊
        // from: 離開當前路由的資訊
        // next: 控制路由的進入或離開
        // next()：允許進入目標路由
        // next(false)：阻止進入目標路由
        // next('/other-route')：重定向到其他路由
    },
    setup(props) {
        const { outsideValue } = props;

        let router = useRouter();
        let route = useRoute();

        let store = useGlobalStore();
        let { isEquipmentSave } = storeToRefs(store);

        let value_01 = ref(false); // is need to go rebuild flow
        let value_02 = ref(0);

        let sensorIdsToDelete: Ref<Array<T>> = ref([]); // sensor id which need to be deleted, when save (use in edit mode)
        let sensorInfoItem = reactive({ data: {} });

        watchEffect(() => {
            // 会根据其中的属性，自动监听其变化
        });

        watch(
            () => [value_01, value_02],
            newVal => {
                console.log(newVal[0], newVal[1]);
            }
        );

        watch(
            () => value_01,
            (newString, oldString) => {
                console.log('String changed from', oldString, 'to', newString);
            }
        );
        onMounted(() => {
            // 在組件的 DOM 元素已經被建立並掛載到頁面上後執行
        });

        return {};
    }
};
