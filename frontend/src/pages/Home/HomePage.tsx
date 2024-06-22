import Header from "@/components/app/header"
import { Outlet } from "@tanstack/react-router"

const HomePage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
        
    )
}

export default HomePage