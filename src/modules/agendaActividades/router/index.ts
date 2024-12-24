import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";
import type { RouteRecordRaw } from "vue-router";

export const agendaActividadesRoutes:RouteRecordRaw={
    path:'/agenda-actividades',
    name:'agendaActividades',
    beforeEnter:[isAuthenticatedGuard],
    redirect:{name:'listaDeInscripciones'},
    component:()=>import('@/modules/principal/layouts/PrincipalLayout.vue'),
    children:[
        {
          path:'mis-actividades',
          name:'listaActividadesUsuario',
          component:()=>import('@/modules/agendaActividades/views/MisActividades.vue')
        },
        {
            path:':id',
            name:'vercitaActvidad',
            component:() => import ('@/modules/agendaActividades/views/MisActividades.vue')
        },
        {
            path:'crear-cita',
            name:'agregarCitaActividad',
            component:() => import ('@/modules/agendaActividades/views/CrearCitaActividad.vue')
        },
    ]
}