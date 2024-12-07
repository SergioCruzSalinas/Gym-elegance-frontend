import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useAuthStore } from "../stores/auth.store";



const isAdminGuard = async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
) => {
    const auhtStore = useAuthStore();
    
    auhtStore.checkAuthStaus();

    auhtStore.isAdmin ? next(): next({ name: 'inicio'})
}


export default isAdminGuard;