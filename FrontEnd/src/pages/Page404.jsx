import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Page404 = () => {
    const navigate = useNavigate()
    let {user} = useContext(AuthContext)
    useEffect(()=> {
        if(user){
            navigate("/home")
        }else{
            navigate("")

        }
    })

}

export default Page404