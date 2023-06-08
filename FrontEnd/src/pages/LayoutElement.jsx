import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import { ProfileProvider } from "../context/ProfileContext";

const LayoutElement = () => {
    let location = useLocation()
    return (
        <ProfileProvider>
                {['/logup','/login'].includes(location.pathname) == false ?
                <>
                    <Navbar />
                    <Outlet/>
                </>
                :
                <Outlet/>
                }
        </ProfileProvider>
    )
}

export default LayoutElement;