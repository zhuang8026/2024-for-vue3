<template>
    <div ref="main" class="layout-main">
        <header>
            <div class="header-container">
                <div class="left">
                    <div class="logo">
                        <img :src="IconLogo" alt="經濟部能源局" />
                    </div>
                    我是 Header
                </div>
            </div>
        </header>
        <div class="">
            我是內容
            <slot></slot>
        </div>

        <footer class="footer">我是 Footer {{ PHM_VERSION }}</footer>
    </div>
</template>
<script lang="ts">
import IconLogo from '@/assets/img/header/icon-logo.svg';

import { PHM_VERSION } from '@/config';

export default {
    name: 'layout-main',
    props: {
        title: {
            type: String,
            default: 'Page Title'
        }
    },
    setup() {
        // retrun
        return {
            IconLogo,
            PHM_VERSION
        };
    }
};
</script>
<style src="./style.modules.scss" scoped lang="scss"></style>
