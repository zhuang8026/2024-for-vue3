<template>
    <div class="w-[calc(100%_-_248px)] bg-white border-box h-screen overflow-hidden">
        <LayoutMain :theme="renderTheme" :title="pageTitle" v-if="renderFunLayout === 'main'">
            <router-view></router-view>
        </LayoutMain>
        <layoutFlexiable :theme="renderTheme" :isAutoScroll="renderScroll" v-else>
            <router-view :key="route.path"></router-view>
        </layoutFlexiable>
    </div>
</template>

<script  src="./app.ts"></script>
<!-- <style lang="scss" scoped src="@/assets/scss/page/app.scss"></style> -->
