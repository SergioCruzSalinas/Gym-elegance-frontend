import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useAuthStore } from "../stores/auth.store";
import { AuthStatus } from "../interfaces";



const isNotAuthenticatedGuard = async( 
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,   
) => {
    const auhtStore = useAuthStore();

    await auhtStore.checkAuthStaus();

    auhtStore.authStatus == AuthStatus.Authenticated ? next({name: 'inicio'}): next();
    
};


export default isNotAuthenticatedGuard;

