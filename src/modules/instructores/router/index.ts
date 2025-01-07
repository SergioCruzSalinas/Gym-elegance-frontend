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
            path:'lista-instructores/:idCoach',
            name:'verInstructor',
            props: true,
            component:() => import ('@/modules/instructores/views/Coach.vue')
        },
        {
            path:'agregar',
            name:'agregarInstructor',
            component:() => import ('@/modules/instructores/views/AgregarInstructor.vue')
        },
    ]
}