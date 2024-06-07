import Header from "@/components/app/header"
import { Outlet } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
        
    )
}

export default HomePage