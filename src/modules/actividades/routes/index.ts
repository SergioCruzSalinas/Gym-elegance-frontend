import type { RouteRecordRaw } from "vue-router";

export const ActividadesRoutes:RouteRecordRaw={
    path:'administrarActividades',
    name:'administrarActividades',
    redirect: { name:'listaDeActividades' },
    component:() => import ('@/modules/actividades/layouts/LayoutActividades.vue'),
    children:[
        {
            path:'lista-actividades',
            name:'listaDeActividades',
            component:()=>import('@/modules/actividades/views/VerActividades.vue'),

        },
        {
            path:'lista-actividades/:activityId',
            name:'EditarActividad',
            props: true,
            component:() => import ('@/modules/actividades/views/VerActividad.vue')
        },
        {
            path:'agregar',
            name:'agregarActividad',
            component:() => import ('@/modules/actividades/views/AgregarActividad.vue')
        },
    ]
}