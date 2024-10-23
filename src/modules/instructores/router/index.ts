import type { RouteRecordRaw } from "vue-router";

export const InstructoresRoutes:RouteRecordRaw={
    path:'instructores',
    name:'instructores',
    redirect: { name:'listaInstructores'},
    component:()=>import('@/modules/instructores/layouts/LayoutInstuctores.vue'),
    children:[
        {
            path:'lista-instructores',
            name:'listaInstructores',
            component:()=>import('@/modules/instructores/views/VerInstructores.vue')
        },
        {
            path:':id',
            name:'verInstructor',
            component:() => import ('@/modules/instructores/views/VerInstructor.vue')
        },
        {
            path:'agregar',
            name:'agregarInstructor',
            component:() => import ('@/modules/instructores/views/AgregarInstructor.vue')
        },
    ]
}