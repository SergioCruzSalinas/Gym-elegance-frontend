import { ActividadesRoutes } from "@/modules/actividades/routes";
import { InscripcionesRoutes } from "@/modules/inscripciones/routes/index";
import { InstructoresRoutes } from "@/modules/instructores/router";
import { MembresiasRoutes } from "@/modules/membresias/router";
import type { RouteRecordRaw } from "vue-router";



export const adminRoutes:RouteRecordRaw={
    path:'/admin',
    name:'admin',
    component:()=>import('@/modules/admin/layouts/AdminLayout.vue'),
    children:[
        {
            path: 'administradores',
            name: 'administardores',
            component:()=>import('@/modules/admin/views/Administradores.vue'),
        },
        {
            path: 'agregar',
            name: 'agregarAdministrador',
            component:()=>import('@/modules/admin/views/AgregarAdministrador.vue')

        },
        InscripcionesRoutes,
        ActividadesRoutes,
        InstructoresRoutes,
        MembresiasRoutes,
    ]
}