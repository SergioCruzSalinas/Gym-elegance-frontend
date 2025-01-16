import { ActividadesRoutes } from "@/modules/actividades/routes";
import isAdminGuard from "@/modules/auth/guards/is-admin.guard";
import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";
import { InscripcionesRoutes } from "@/modules/inscripciones/routes/index";
import { InstructoresRoutes } from "@/modules/instructores/router";
import { MembresiasRoutes } from "@/modules/membresias/router";
import type { RouteRecordRaw } from "vue-router";

export const adminRoutes:RouteRecordRaw={
    path:'/admin',
    redirect:{name:'inscripciones'},
    beforeEnter: [ isAuthenticatedGuard, isAdminGuard],
    name:'admin',
    component:()=>import('@/modules/admin/layouts/AdminLayout.vue'),
    children:[
               
        ActividadesRoutes,
        InstructoresRoutes,
        MembresiasRoutes,
        InscripcionesRoutes,
    ]
}