import type { RouteRecordRaw } from "vue-router";

export const MembresiasRoutes:RouteRecordRaw={
    path:'membresias',
    name:'membresias',
    redirect: { name:'listaMembresias'},
    component:()=>import('@/modules/membresias/layouts/LayoutMembresias.vue'),
    children:[
        {
            path:'lista-membresias',
            name:'listaMembresias',
            component:()=>import('@/modules/membresias/views/Membresias.vue')
        },
        {
            path:'lista-membresias/:idMembresia',
            name:'editarMembresia',
            props: true,
            component:() => import ('@/modules/membresias/views/Membresia.vue')
        },
        {
            path:'agregar',
            name:'agregarMembresia',
            component:() => import ('@/modules/membresias/views/AgregarMembresia.vue')
        },
    ]
}