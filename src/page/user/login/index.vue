<template>
    <section class="login" v-loading.fullscreen.lock>
        <h1 class="">Login</h1>
        <el-input v-model="state.account" placeholder="Account" maxlength="100" clearable />
        <div class="h-10" />
        <el-input v-model="state.password" placeholder="Password" maxlength="20" clearable show-password />
        <div class="h-10" />
        <el-button class="btn-large" type="primary" size="large" :icon="Star" round @click="loginButton"
            >GO Login</el-button
        >
    </section>
</template>
<script>
import { useGlobalStore } from '@/store';
import { ref, reactive, watch, computed, onMounted } from 'vue';
// vue
import { useRouter } from 'vue-router';

// api
import { apiLogin } from '@/api/api';

import { ElLoading } from 'element-plus';
import { Star } from '@element-plus/icons-vue';

import { showLoading } from '@/assets/util/global.ts';
import { getCookie } from '@/api/cookie';

export default {
    name: 'login',
    components: {},
    props: {},
    setup() {
        let router = useRouter();
        let store = useGlobalStore();
        let state = reactive({
            account: '',
            password: '',
            error: {
                accountEmail: ''
            }
        });

        let loginButton = async () => {
            showLoading();
            let payload = {
                userId: state.account,
                userPwd: state.password
            };
            try {
                let res = await apiLogin(payload);
                console.log('login result', res);
                if (res.code === 200) {
                    store.setUserData(res.data);
                    showLoading().close();
                    router.push(`/main`);
                }
            } catch (err) {
                console.log('API Error apiLogin:', err);
            }
        };

        let getMoveToMain = () => {
            const USER_TOKEN = getCookie('iii_token'); // cookie testing
            if (USER_TOKEN) {
                router.push({ path: `/main` });
            }
        };

        watch(
            () => [state.account, state.password],
            () => {
                // console.log(state.account != '' && state.password != '');
            }
        );

        onMounted(async () => {
            //一進頁面拿使用者資料
            await getMoveToMain();
        });

        return {
            // value
            state,

            // methods
            loginButton
        };
    }
};
</script>
<style src="./style.modules.scss" scoped lang="scss"></style>
