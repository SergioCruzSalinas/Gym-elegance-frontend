import type { RouteRecordRaw } from "vue-router";
import isNotAuthenticatedGuard from "../guards/is-not-authenticated.guard";
import isAuthenticatedGuard from "../guards/is-authenticated.guard";



export const authRoutes:RouteRecordRaw={
    path:'/auth',
    name:'auth',
    redirect: { name:'login' },
    component:()=>import('@/modules/principal/layouts/PrincipalLayout.vue'),
    children:[
        {
            path:'login',
            name:'login',
            beforeEnter: [isNotAuthenticatedGuard],
            component:()=>import('@/modules/auth/views/LoginView.vue')
        },
        {
            path:'register',
            name:'register',
            beforeEnter: [isNotAuthenticatedGuard],
            component:()=>import('@/modules/auth/views/RegisterView.vue')
        },
        {
            path:'password',
            name:'password',
            beforeEnter:[isAuthenticatedGuard],
            component: () => import('@/modules/auth/views/ChangePassword.vue')

        },
    ]
}