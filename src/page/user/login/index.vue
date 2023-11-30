<template>
    <section class="login">
        <h1 class="">Login</h1>
        <el-input v-model="state.account" placeholder="Account" maxlength="10" clearable />
        <div class="h-10" />
        <el-input v-model="state.password" placeholder="Password" maxlength="10" clearable show-password />
        <div class="h-10" />
        <el-button class="btn-large" type="primary" size="large" :icon="Star" round @click="loginButton">login</el-button>
    </section>
</template>
<script>
import { useGlobalStore } from '@/store';
import { ref, reactive, watch, computed } from 'vue';
// vue
import { useRouter } from 'vue-router';

// api
import { apiLogin } from '@/api/api';

import { Star } from '@element-plus/icons-vue';

export default {
    name: 'login',
    components: {},
    props: {},
    setup() {
        let router = useRouter();
        let store = useGlobalStore();

        let state = reactive({
            account: 'William666',
            password: '666666',
            error: {
                accountEmail: ''
            }
        });

        const count = ref(0);

        // 當count有變化時，會自動執行，並且重新計算
        const squaredCount = computed(() => {
            return count.value * count.value;
        });

        let loginButton = async () => {
            console.log('login');
            router.push(`/main`);
            let payload = {
                userEmail: 'willaim',
                password: '123'
            };
            try {
                let result = await apiLogin(payload);
                let token = result.token;
                // const expiredDate = result.expire_at;
                // const isFirstLogin = result.isFirstLogin;
                store.apiReq.defaults.headers.common['Authorization'] = `Token ${token}`;

                console.log('login result', result);

                // if (isFirstLogin) {
                //     router.push({ name: FUN_NAME.PWD_SETTING });
                //     return;
                // } else {
                //     router.push({ name: FUN_NAME.DASHBOARD });
                // }
            } catch (err) {
                console.log('API Error apiLogin');
            }
        };

        watch(
            () => [state.account, state.password],
            () => {
                console.log(state.account != '' && state.password != '');
            }
        );
        return {
            state,
            loginButton
        };
    }
};
</script>
<style src="./style.modules.scss" scoped lang="scss"></style>
