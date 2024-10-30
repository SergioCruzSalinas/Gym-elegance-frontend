import type { RouteRecordRaw } from "vue-router";

export const agendaActividadesRoutes:RouteRecordRaw={
    path:'/agenda-actividades',
    name:'agendaActividades',
    redirect:{name:'listaDeInscripciones'},
    component:()=>import('@/modules/principal/layouts/PrincipalLayout.vue'),
    children:[
        {
          path:'mis-actividades',
          name:'listaDeInscripciones',
          component:()=>import('@/modules/agendaActividades/views/MisActividades.vue')
        },
        {
            path:':id',
            name:'verInscripcion',
            component:() => import ('@/modules/agendaActividades/views/MisActividades.vue')
        },
        {
            path:'crear-cita',
            name:'agregarInscripcion',
            component:() => import ('@/modules/agendaActividades/views/CrearCitaActividad.vue')
        },
    ]
}