<template>
    <div class="main-container">
        <Sidebar />
        <div class="content-container">
            <Header :path="this.$route.name" />
            <router-view />
        </div>
    </div>
</template>

<script>
    import Sidebar from './components/Sidebar.vue';
    import Header from './components/Header.vue';

    export default {
        components: { Sidebar, Header}
    }
</script>

<style lang="scss">
    @import '@/assets/scss/responsive.scss';
    @import '@/assets/scss/colors.scss';

    .main-container {
        display: grid;
        grid-template-columns: 2fr 8fr;
        font-family: 'Montserrat';
        .content-container {
            background: $op-white;
            padding: 25px;
            // overflow-y: scroll;
            .content {
                background: $white;
                padding: 1.5rem;
                border-radius: 6px;
                box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>
