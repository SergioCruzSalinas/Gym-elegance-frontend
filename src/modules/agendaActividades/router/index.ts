import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";
import type { RouteRecordRaw } from "vue-router";

export const agendaActividadesRoutes:RouteRecordRaw={
    path:'/agenda-actividades',
    name:'agendaActividades',
    beforeEnter: isAuthenticatedGuard,
    redirect:{name:'listaDeInscripciones'},
    component:()=>import('@/modules/principal/layouts/PrincipalLayout.vue'),
    children:[
        {
          path:'mis-actividades',
          name:'listaActividadesUsuario',
          component:()=>import('@/modules/agendaActividades/views/MisActividades.vue')
        },
        {
            path:'mis-actividades/:idActivity',
            name:'citaActividad',
            props: true,
            component:() => import ('@/modules/agendaActividades/views/AsistenciaActividad.vue')
        },
        {
            path:'crear-cita',
            name:'agregarCitaActividad',
            component:() => import ('@/modules/agendaActividades/views/CrearCitaActividad.vue')
        },
        {
            path:'asistencia',
            name:'asistencia',
            component:() => import('@/modules/agendaActividades/views/AsistenciaActividad.vue')

        },
    ]
}