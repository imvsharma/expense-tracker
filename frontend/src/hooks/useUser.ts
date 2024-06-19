import { AuthService } from "@/services/auth.service"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"

export const useLogin = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: AuthService.login,
        onSuccess: () => {
            navigate({to: '/dashboard'})
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