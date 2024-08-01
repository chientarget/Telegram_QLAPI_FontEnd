import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/login.vue';
import Register from '../pages/register.vue';
import MainLayout from '../layouts/MainLayout.vue';
import Dashboard from '../pages/Dashboard.vue';
import Profile from '../pages/Profile.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/',
        component: MainLayout,
        meta: {
            requiresAuth: true,
        },
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: 'profile',
                name: 'Profile',
                component: Profile,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user'); // Replace with actual authentication check
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;
