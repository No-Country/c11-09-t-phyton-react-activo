import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { ProfileProvider } from "../context/ProfileContext";

const LayoutElement = () => {
    return (
        <div>
            <div>
                    <ProfileProvider>
                        <Navbar />
                        <Outlet/>
                    </ProfileProvider>
            </div>
        </div>
    )
}

export default LayoutElement;