<template>
    <div class="header">
        <div class="navbar p-5 mb-3 flex justify-between items-center">
            <div class="search-bar flex gap-4">
                <button class="open-sidebar-btn" @click="this.state.closeSidebar = false"><Chevron /></button>
                <Search class="search-icon" />
            </div>
            <div class="profile flex items-center justify-center">
                <Bell class="notification" />
                <div class="profile-details ml-16 flex items-center justify-center">
                    <div class="text text-right">
                        <h1 class="name">John Doe</h1>
                        <p class="role">Admin</p>
                    </div>
                    <div class="picture ml-4">
                        <img src="@/assets/images/profile.svg" />
                    </div>
                </div>
            </div>
        </div>
        <div class="breadcrumb-container flex py-6 items-center">
            <h4 class="page-title">{{ this.path }}</h4>
            <div class="divider mx-4"></div>
            <div class="breadcrumb flex items-center">
                <div class="icon">
                    <Home />
                </div>
                <div class="chevron">
                    <Chevron class="icon-chevron" />
                </div>
                <div class="menu">Content</div>
                <div class="chevron">
                    <Chevron class="icon-chevron" />
                </div>
                <div class="submenu">{{ this.path }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Search from '@/components/icons/Search.vue';
    import Bell from '@/components/icons/Bell.vue';
    import Home from '@/components/icons/Home.vue';
    import Chevron from './icons/Chev.vue';
    import { mainStore } from '@/store/main.js'

    export default {
        props : [ 'path' ],
        components : { Search, Bell, Home, Chevron },
        setup() {
            const state = mainStore()

            return { state }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/colors.scss';
    @import '@/assets/scss/responsive.scss';
    .header {      
        color: $cadet; 
        .open-sidebar-btn {
            display: none;
        }
        .navbar {
            background: $white;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            .open-sidebar {
                padding: 0.8rem;
                background: $red;
                border-radius: 50%;
                color: $white;
            }
            .profile .profile-details .text {
                .name {
                    color: $cadet;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 21px;
                }
                .role {
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 15px;
                    color: $blue;
                }
            }
            .icon-component {
                display: grid;
                place-items: center;
            }
        }
        .breadcrumb-container {
            .icon { color: $red; }
            .page-title {
                font-size: 25px;
                font-weight: 500;
            }
            .divider {
                background: $op-grey;
                width: 1px;
                height: 26px;
                opacity: 50%;
            }
            .menu, .submenu { font-size: 14px; }
            .menu, .submenu, .chevron {color: $blue; }
            .chevron { margin: 0 10px; }
        }   
    }
</style>