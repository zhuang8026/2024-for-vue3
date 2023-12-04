import { computed, onBeforeMount, onMounted, watch, watchEffect, isShallow, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// api
// import { apiSetting } from './api/api';

// components
import LayoutMain from '@/components/block/LayoutMain/index.vue';

import { PHM_VERSION } from './config';

// @import "./styles/style.scss";
// @import "./styles/icon.css";

export default {
    components: {
        LayoutMain
    },
    props: {},
    setup() {
        const router = useRouter();
        const route = useRoute();

        // check current page layout
        let renderFunLayout = computed(() => {
            return route.meta.layout;
        });

        let renderTheme = computed(() => {
            return route.meta.theme;
        });

        let renderScroll = computed(() => {
            return route.meta.isScroll;
        });

        let isExtra = computed(() => {
            return route.meta.isExtra;
        });

        let currentFun = computed(() => {
            return route.name;
        });

        onBeforeMount(async () => {
            console.log('app onBeforeMount');
            // apiSetting();
        });

        onMounted(() => {
            console.log('app onMounted');
        });

        return {
            PHM_VERSION,
            route,
            renderFunLayout,
            renderTheme,
            renderScroll,
            isExtra,
            currentFun,
            LayoutMain
        };
    }
};
