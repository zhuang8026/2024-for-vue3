// vue
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes.ts';

export const router = createRouter({
    // mode: 'history',
    history: createWebHashHistory(),
    // base: ENV.production.base,
    // @ts-ignore
    // ts-ignore: 註解會忽略下一行產生的所有錯誤
    routes: routes,
    // @ts-ignore
    scrollBehavior(to, from, savedPosition) {
        // if (savedPosition && to.meta.keepAlive) {
        //     return savedPosition;
        // }
        // if (to.hash) {
        //     return { el: to.hash, behavior: "smooth" };
        // } else {
        //     document.getElementById('main-layout-content').scrollTo(0, 0);
        //     return { x: 0, y: 0 };
        // }
    }
});

// let isFirstInitSet = true;
router.beforeEach(async (to, from, next) => {
    // let isHasAuth = false;
    // let store = useGlobalStore();
    window.scrollTo(0, 0);
    // let env = import.meta.env.VITE_ENV; //現在環境

    let isRequiresAuth = to.meta.requiresAuth; // 检查路由是否需要登录
    let pageName = to.name;
    let fromPath: string = String(from.name);

    console.log(`page name: ${String(pageName)}, page requiresAuth: ${isRequiresAuth}, from: ${fromPath}`);

    // if (from.name == FUN_NAME.LOGIN) {
    //     isFirstInitSet = true;
    // }

    if (isRequiresAuth) {
        // 第一次進入
        // if (isFirstInitSet) {
        //     let data = await checkUserPermission();
        //     let role = data.role;
        //     store.setRole(role);
        //     isFirstInitSet = false;
        // }

        // let permisson = permissionMapping[pageName]; // 判斷查看用戶資格 [admin, user, super user]
        // let currentRole = store.userRole;
        let isHasAuth = true;

        // dec: permisson has 'all' or [admin, user, super user]
        // if (typeof permisson == 'string') {
        // // control user login
        //     isHasAuth = true;
        // } else {
        //     isHasAuth = permisson.includes(currentRole);
        // }

        isHasAuth ? next() : next('/login');
    } else {
        next();
    }

    next();
});

export default router;
