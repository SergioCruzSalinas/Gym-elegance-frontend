import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { AuthStatus, UserAuth } from '../interfaces';
import { checkTokenAction, loginAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';
import { RegisterAction } from '../actions/register.action';

export const useAuthStore = defineStore('auth', () => {

  const authStatus = ref<AuthStatus>(AuthStatus.Checking);
  const user = ref<UserAuth|undefined>();
  const token = ref(useLocalStorage('token', ''));

  const login = async( correoElectronico: string, contrasenia: string) => {

    try {
      const loginResp = await loginAction(correoElectronico, contrasenia);

      if(!loginResp.ok){
        logout();
        return false;
      }

      user.value = loginResp.user;
      token.value = loginResp.token;
      authStatus.value = AuthStatus.Authenticated

      return true;

    } catch (error) {
      return logout()
    }
    
    
  }

  const checkAuthStaus = async (): Promise<boolean> => {
    try {
      const statusResp = await checkTokenAction();

      if( !statusResp.ok){
        logout();
        return false;
      }

      authStatus.value = AuthStatus.Authenticated;
      user.value = statusResp.user;
      token.value = statusResp.token

      console.log('infromacion de user de check status', user)

      return true;
    } catch (error) {
      logout();
      return false;
      
    }
  }

  const register = async (nombreUsuario: string, correoElectronico: string, telefono: string, contrasenia: string) => {
    try {
      const registerResp = await RegisterAction(nombreUsuario, correoElectronico, telefono, contrasenia );

      if(!registerResp.ok){
        return { ok: false, message: registerResp.message}
      }

      return {ok: true, message:''}
    } catch (error) {
      return { ok: false, message: 'Error al registrar el usuario'}
      
    }
  };

  const logout = () => {
    localStorage.removeItem('token')


    authStatus.value = AuthStatus.Unauthenticated;
    user.value = undefined;
    token.value = '';
    return false
  }



 
  return {
    user,
    authStatus,
    token,

    isChecking: computed(()=> authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(()=> authStatus.value === AuthStatus.Authenticated),
    isAdmin: computed(()=>user.value?.rol == 2),
    isInstructor: computed(()=> user.value?.rol == 3),
    isUser: computed(() => user.value?.rol == 4),
    

    login,
    logout,
    checkAuthStaus,
    register,


  };
});
