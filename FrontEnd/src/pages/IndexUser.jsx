import { useContext } from "react";
import  AuthContext  from '../context/AuthContext'
const IndexUser = () => {
    let { user } = useContext(AuthContext)
    return (
        <div>
            <h1>Hola de nuevo {user.username} </h1>
        </div>
        
    )
}
export default IndexUser;