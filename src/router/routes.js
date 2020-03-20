import AuthLayout from '@/components/layouts/AuthLayout.vue';

// Auth routes
import HomeLayout from '@/views/home/Index.vue';
import authRoutes from '@/router/auth-routes.js';

export default [
    {
        path: '/',
        name: 'app-home',
        redirect: '/welcome'
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: AuthLayout
    },
    {
        path: '/app',
        name: 'dashboard',
        component: HomeLayout,
        children: authRoutes
    }
];