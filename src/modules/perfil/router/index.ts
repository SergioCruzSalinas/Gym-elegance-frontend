import isAuthenticatedGuard from '@/modules/auht/guards/is-authenticated.guard';
import { RouteRecordRaw } from 'vue-router';

export const perfilRoutes:RouteRecordRaw={
    path:'/perfil',
    name:'perfil',
    redirect: {name:'myPerfil'},
    beforeEnter: [isAuthenticatedGuard],
    component:()=>import('@/modules/principal/layouts/PrincipalLayout.vue'),
    children:[
        {
          path:'my-perfil',
          name:'myPerfil',
          component:()=>import('@/modules/perfil/views/MiPerfil.vue')
        },
        
    ]
}