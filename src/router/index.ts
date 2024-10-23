import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/modules/principal/views/HomeView.vue';
import { authRoutes } from '@/modules/auht/routes';
import PrincipalLayout from '@/modules/principal/layouts/PrincipalLayout.vue';
import { adminRoutes } from '@/modules/admin/routes';


const routes = [
  { path: '/',
    redirect:'home',
    name:'principal',
    component: PrincipalLayout,
    children:[
      {
        path:'home',
        name:'inicio',
        component:HomeView
      },
      {
        path:'planes',
        name:'planes',
        component:()=>import('@/modules/principal/views/PlanesView.vue'),
      },
      {
        path:'actividades',
        name:'actividades',
        component:()=>import('@/modules/principal/views/Actividades.vue'),
      },
      {
        path:'sucursales',
        name:'sucursales',
        component:()=>import('@/modules/principal/views/Sucursales.vue')
      }
    ]
  },

  authRoutes,
  adminRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;