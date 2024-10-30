import type { RouteRecordRaw } from "vue-router";

export const InscripcionesRoutes:RouteRecordRaw={
    path:'inscripciones',
    name:'inscripciones',
    redirect:{name:'listaInscripciones'},
    component:()=>import('@/modules/inscripciones/layouts/LayoutInscripciones.vue'),
    children:[
        {
          path: 'lista',
          name:'listaInscripciones',
          component:()=>import('@/modules/inscripciones/views/VerInscripciones.vue')
        },
        {
            path: ':id',
            name:'verInscripcion',
            component:() => import ('@/modules/inscripciones/views/VerInscripciones.vue')
        },
        {
            path: 'registrar',
            name:'addInscripcion',
            component:()=>import('@/modules/inscripciones/views/AgregarInscripcion.vue')
          },
    ]
}