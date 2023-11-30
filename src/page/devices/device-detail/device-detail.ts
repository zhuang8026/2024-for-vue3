import { onMounted, Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGlobalStore } from '@/store';
export default {
    name: 'device-detail',
    components: {},
    props: {},
    setup() {
        let route = useRoute();
        let router = useRouter();
        let store = useGlobalStore();

        let mode: Ref<String> = ref(''); // get data: mode.value

        onMounted(() => {});

        return {};
    }
};
