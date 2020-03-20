<template>
    <div class="auth_layout">
        <div class="d-flex auth_layout_content">
            <header>
                <div class="d-flex justify-content-center align-items-center mx-auto my-5 bg-white auth_img_box">
                    <i class="fa fa-check icon_check"></i>
                </div>
            </header>
            <main class="container auth_layout_body">
                <div class="row">
                    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <transition name="slide-right">
                            <component :is="currentView" />
                        </transition>

                        <div 
                            class="text-center d-none d-sm-block mt-4 btn_bar"
                            v-if="actionBarVisible"
                            >
                            <button 
                                class="btn btn-outline-light mr-3 action_btn" 
                                @click="setView('AppRegister')"
                                >Register</button>
                            <button 
                                class="btn btn-light px-3 action_btn" 
                                @click="setView('AppLogin')"
                                >Login</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <!-- bottom navbar -->
        <transition name="slide-up">
            <bottom-navbar  v-if="bottomNavbarVisible">
                <template>
                    <button
                        class="py-4 text-muted bg-white bottom_nav_item"
                        @click="setView('AppWelcome')"
                        >
                        <i class="fa fa-home icon"></i>
                    </button>
                    <button
                        class="py-4 text-muted bg-white bottom_nav_item"
                        @click="setView('AppRegister')"
                        >
                        Register
                    </button>
                    <button
                        class="py-4 text-muted bg-white bottom_nav_item"
                        @click="setView('AppLogin')"
                        >
                        Login
                    </button>
                </template>

            </bottom-navbar>
        </transition>
    </div>
</template>

<script>
import AppWelcome from '@/views/AppWelcome.vue';
import AppLogin from '@/views/auth/AppLogin.vue';
import AppRegister from '@/views/auth/AppRegister.vue';
import BottomNavbar from '@/components/navigations/BottomNavbar.vue';

export default {
    components: {
        AppLogin,
        AppWelcome,
        AppRegister,
        BottomNavbar,
    },

    data(){
        return {
            currentView: 'AppWelcome',
            actionBarVisible: true,
            bottomNavbarVisible: true
        }
    },

    methods: {
        setView(str){
            this.currentView = str;
            this.actionBarVisible = false;
            this.bottomNavbarVisible = this.currentView == 'AppWelcome';
        }
    },

    created(){
        window.addEventListener('resize', () => {
            if(this.currentView !== 'AppWelcome'){
                this.bottomNavbarVisible = false;
            }else {
                this.bottomNavbarVisible = true;
            }
        });
    }
    
};
</script>