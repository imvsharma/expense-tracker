import { Loading } from "@/components/app/Loading/Loading"
import Header from "@/components/app/header"
import { useIsUserLoggedIn } from "@/hooks/useUser"
import { AuthService } from "@/services/auth.service"
import { Navigate, Outlet } from "@tanstack/react-router"
import { useEffect } from "react"


const HomePage = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
        
    )
    // const {data, error, isError, isFetching, isFetched} = useIsUserLoggedIn()
    //  if (isFetching) {
    //     return (
    //         <Loading />
    //     )
    //  }

    //  if(isError) {
    //     console.log(error);
    //     return (
    //         <Navigate to="/login" />
    //     )
    //  }

    //  if(isFetched) {
    //     console.log(data);
    //     return (
    //         <>
    //             <Header />
    //             <Outlet />
    //         </>
            
    //     )
    //  }
    
}

export default HomePage