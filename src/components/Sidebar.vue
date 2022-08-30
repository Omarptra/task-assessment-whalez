<template>
    <div class="sidebar sticky" :class="{ 'close-sidebar' : this.data.closeSidebar }">
        <div class="sidebar-header flex items-center justify-center">
            <div class="logo flex items-center justify-center">
                <img class="brand-logo" src="@/assets/images/digilearn_logo.svg" />
                <h2 class="brand ml-3">Digilearn</h2>
            </div>
            <button class="open-sidebar-btn" @click="this.data.closeSidebar = true"><Chevron /></button>
        </div>
        <div class="sidebar-menus mt-6">
            <div class="menu-item">
                <a href="#" class="menu" ><Home class="menu-icon" />Dashboard<Chevron class="chevron" /> </a>                
            </div>
            <div class="clone-management mt-6">
                <h5 class="subtitle">Clone Management</h5>
                <div class="menu-item">
                    <a href="#" @click="state.showContentSubmenu = !state.showContentSubmenu" class="menu" :class="{ 'menu-active' : state.showContentSubmenu }" ><Box class="menu-icon" />Content<Chevron class="chevron" /></a>
                    <Transition name="slide-fade">
                        <div v-show="state.showContentSubmenu" class="drop-menu flex flex-col" >
                            <router-link v-for="i in submenus.length" :key="i" class="submenu flex p-3" :to="submenus[i-1]" ><Circle class="submenu-icon mr-4" />{{ submenus[i-1] }}</router-link>
                        </div>            
                    </Transition>                    
                </div>
                <div class="menu-item">
                    <a href="#" class="menu"><User class="menu-icon" />Account<Chevron class="chevron" /></a>
                </div>
                <div class="menu-item">
                    <a href="#" class="menu"><Config class="menu-icon" />Setting<Chevron class="chevron" /></a>
                </div>
                <div class="menu-item">
                    <a href="#" class="menu"><Piechart class="menu-icon" />Analytic<Chevron class="chevron" /></a>
                </div>
                <div class="menu-item">
                    <a href="#" class="menu"><Aperture class="menu-icon" />Branding<Chevron class="chevron" /></a>
                </div>
                <div class="menu-item">
                    <a href="#" class="menu"><Link class="menu-icon" />Integrasi<Chevron class="chevron" /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Circle from '@/components/icons/Circle.vue';
    import User from './icons/User.vue';
    import Config from './icons/Config.vue';
    import Aperture from './icons/Aperture.vue';
    import Link from './icons/Link.vue';
    import Home from './icons/Home.vue';
    import Piechart from './icons/Piechart.vue';
    import Box from './icons/Box.vue';
    import Chevron from './icons/Chevron.vue';
    import { reactive } from 'vue';
    import { mainStore } from '@/store/main';

    export default {
        components : { Circle, User, Config, Aperture, Link, Home, Piechart, Box, Chevron, Chevron },
        data() {
            return {
                showDashboardSubmenu : false,
                showContentSubmenu : false,
                showSettingSubmenu : false,
                showAnalyticSubmenu : false,
                showBrandingSubmenu : false,
                showIntegrasiSubmenu : false,
                submenus : ["assignment", "webinar", "video", "podcast", "files", "certificate", "course", "pathways", "vouchers", "quiz", "category", "competencies"],
            }
        },
        setup() {
            const state = reactive({
                showContentSubmenu : false,
            })

            const data = mainStore() 


            const check = () => {
                if(window.location.pathname !== '/') state.showContentSubmenu = true
                else state.showContentSubmenu = false
            }
            
            check()

            return { state, data }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/colors.scss';
    @import '@/assets/scss/responsive.scss';
    .sidebar {
        background: $white;
        height: 100vh;
        top: 0;
        padding: 1.5rem 1rem;
        overflow: scroll;
        scrollbar-width: none;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        &::-webkit-scrollbar {
            display: none;
        }
        .open-sidebar-btn {
            display: none;
        }
        .brand-logo { width: 25px }
        .brand {
            color: $red;
            font-size: 24px;
            font-weight: 500;
        }
        .sidebar-menus {
            .clone-management .subtitle {
                font-size: 0.8rem;
                color : $cyan;
                font-weight: 600;
            } 
            .menu-item, .submenu {
                font-size: 16px;
                font-weight: 500;
                
                color: $cadet;
            }
            .menu-item{
                margin: 2.5px 0;
                padding-right: 0;
                .menu  {
                    display: flex;
                    align-items: center;
                    padding: 0.8rem;
                    border-radius: 6px;
                    &:hover {
                        background: $cel-blue;
                        color: $blue;
                    }
                    .menu-icon { margin-right: 1rem }
                    .chevron {
                        position: absolute;
                        right: 3rem;
                        transition: 0.2s ease;
                    }
                    
                }
                .menu-active {
                    background: $cel-blue;
                    color: $blue;
                    .chevron { transform: rotate(90deg) }
                }
            }
            .drop-menu { margin-top: 5px }
            .submenu {
                border-radius: 6px;
                text-transform: capitalize;
                margin: 2.5px 0;
                padding-left: 1.5rem;
                color: $blue;
                z-index: 0;
                &:hover { background: $cel-blue }
            }            
        }
        .slide-fade-enter-active {
            transition: all 0.3s ;
        }

        .slide-fade-leave-active {
            transition: all 0.3s;
        }

        .slide-fade-enter-from,
        .slide-fade-leave-to {
            transform: translatey(-20px);
            opacity: 0;
        }
    }
    .router-link-active {
        background: $red !important;
        color: $white !important;
        box-shadow: 0px 0px 10px $red;
    }
</style>