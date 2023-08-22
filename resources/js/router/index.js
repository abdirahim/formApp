import Vue from 'vue';
import Router from 'vue-router';
import Form from '../components/Form';
import FormInfo from "../components/FormInfo";


Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'form',
            component: Form
        },
        {
            path: '/',
            name: 'formInfo',
            component: FormInfo
        },

    ]
});
