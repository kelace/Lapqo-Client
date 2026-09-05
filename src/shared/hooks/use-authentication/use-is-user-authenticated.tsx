import { useAuthStore } from '@/shared/stores/auth/index'

export function useIsUserAuthenticated(){
     return useAuthStore().isUserAuthenticated();
}