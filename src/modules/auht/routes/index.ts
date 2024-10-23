import type { RouteRecordRaw } from "vue-router";



export const authRoutes:RouteRecordRaw={
    path:'/auth',
    name:'auth',
    component:()=>import('@/modules/principal/layouts/PrincipalLayout.vue'),
    children:[
        {
            path:'login',
            name:'login',
            component:()=>import('@/modules/auht/views/LoginView.vue')
        },
        {
            path:'register',
            name:'register',
            component:()=>import('@/modules/auht/views/RegisterView.vue')
        }
    ]
}