import { AuthService } from "@/services/auth.service"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { toast } from "sonner"

export const useLogin = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: AuthService.login,
        onSuccess: () => {
            navigate({to: '/'});
            toast.dismiss(1)
            toast.success("User Logged in successfully")
        }
    })
}

export const useIsUserLoggedIn = () => {
    return useQuery({
        queryKey: ['is-user-loggedIn'],
        queryFn: AuthService.isUserLoggedIn,
        staleTime: 0,
        retry: false
    })
}

export const useUserLogout = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: AuthService.logout,
        onSuccess: () => {
            navigate({to: '/login'})
        }
    })
}