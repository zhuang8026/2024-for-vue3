// page
import Main from '@/page/main/index.vue';
// device
import Device from '@/page/devices/device/index.vue';
import DeviceDetail from '@/page/devices/device-detail/index.vue';
import Login from '@/page/user/login/index.vue';
import NotFound from '@/page/notFound/index.vue';

export const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/main',
        name: 'Index',
        meta: {
            layout: 'main',
            theme: 'default', // defualt, white, grey
            isExtra: false, // 是否有額外的東西要顯示在標題列'
            isScroll: false, // 是否要在內頁自動長有scrollbar
            requiresAuth: true
        },
        component: Main,
        children: [
            {
                path: 'device',
                name: 'device',
                meta: {
                    layout: 'main',
                    theme: 'default', // defualt, white, grey
                    isExtra: false, // 是否有額外的東西要顯示在標題列'
                    isScroll: false, // 是否要在內頁自動長有scrollbar
                    requiresAuth: true
                },
                component: Device
            },
            {
                path: 'device-detail/:id',
                name: 'device-detail',
                meta: {
                    layout: 'flexiable',
                    theme: 'white', // defualt, white, grey
                    requiresAuth: true
                },
                component: DeviceDetail
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            layout: 'full', // full
            theme: 'light',
            requiresAuth: false
        },
        component: Login
    },
    // 其他路由配置...
    {
        path: '/:catchAll(.*)', // 這個路由會匹配所有未匹配到的路徑
        name: 'NotFound',
        component: NotFound
    }
];
