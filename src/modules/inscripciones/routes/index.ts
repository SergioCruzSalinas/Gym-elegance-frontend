import type { RouteRecordRaw } from "vue-router";

export const InscripcionesRoutes:RouteRecordRaw={
    path:'inscripciones',
    name:'inscripciones',
    redirect:{name:'listaDeInscripciones'},
    component:()=>import('@/modules/inscripciones/layouts/LayoutInscripciones.vue'),
    children:[
        {
          path:'lista',
          name:'listaDeInscripciones',
          component:()=>import('@/modules/inscripciones/views/VerInscripciones.vue')
        },
        {
            path:':id',
            name:'verInscripcion',
            component:() => import ('@/modules/inscripciones/views/VerInscripciones.vue')
        },
        {
            path:'agregar',
            name:'agregarInscripcion',
            component:() => import ('@/modules/inscripciones/views/AgregarInscripcion.vue')
        },
        {
            path:'editar/:id',
            name:'editarInscripcion',
            component:() => import ('@/modules/inscripciones/views/EditarInscripcion.vue')
        },
        {
            path:'estatus/:id',
            name:'estatus-inscripcion',
            component:() => import ('@/modules/inscripciones/views/EstatusInscripcion.vue')
        },
    ]
}