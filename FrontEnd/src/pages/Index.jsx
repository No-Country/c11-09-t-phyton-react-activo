import { useState,useEffect } from "react";
import getUsersAll from "../api/users.api";
const Index = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        async function loadUsers(){
            const res = await getUsersAll()
            setUsers(res.data)
        }
        loadUsers()
    },[])
    return (
        <div>
            <h1>Todos los usuarios </h1>
            {users.length > 0 ? users.map(user => {
                return (
                <div key={user.id}>
                    <h3>{user.username}</h3>
                    <h3>{user.email}</h3>
                </div>

                )
            }): <p>No hay usuarios</p>}

        </div>
        
    )
}
export default Index;