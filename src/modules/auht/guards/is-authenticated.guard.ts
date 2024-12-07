import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useAuthStore } from "../stores/auth.store";
import { AuthStatus } from "../interfaces";

const isAuthenticatedGuard = async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
) => {
    const auhtStore = useAuthStore();

    await auhtStore.checkAuthStaus();

    auhtStore.authStatus == AuthStatus.Unauthenticated ? next({ name: 'inicio'}): next();
};

export default isAuthenticatedGuard;