import { useContext } from "react";
import ProfileContext from '../context/ProfileContext'

const IndexUser = () => {
    let { profile } = useContext(ProfileContext)
    return (
        <div>
            <h1>Hola de nuevo {profile.username} </h1>
        </div>
    )
}
export default IndexUser;