import Dashboard from '@/views/home/AppDashboard.vue';
import TasksView from '@/views/home/TasksView';

export default [
    {
        path: "dashboard",
        name: 'user-home',
        component: Dashboard
    },
    {
        path: '/tasks/:category',
        name: 'tasks',
        component: TasksView
    }
];