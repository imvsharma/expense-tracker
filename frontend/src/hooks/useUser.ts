import { AuthService } from "@/services/auth.service"
import useBoundStore from "@/store/store"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { toast } from "sonner"

export const useLogin = () => {
    const {getUser} = useBoundStore()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: AuthService.login,
        onSuccess: (data) => {
            console.log(data)
            getUser(data.userId)
            navigate({to: '/'});
            toast.dismiss(1)
            toast.success("User Logged in successfully")
        },
        onError: (error) => {
            console.log(toast.getHistory())
            toast.dismiss(1)
            toast.error(error.message)
            
        }
    })
}

export const useSignup = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationFn: AuthService.signup,
        onSuccess: () => {
            navigate({to: '/'});
            toast.dismiss(1)
            toast.success("User registered successfully")
        },
        onError: (error) => {
            
            toast.dismiss(1)
            toast.error(error.message)
            
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

export const useUpdatePassword = () => {
    return useMutation({
        mutationFn: AuthService.changePassword
    })
}