import { useUser } from "@/lib/context/user.context"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const user = useUser();

    if(user.current === null && user.authState === "Pending") {
        return (
            <div>Loading...</div>
        )
    }
    console.log(user)
    return (
        user.current && user.authState === "Success" ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoute