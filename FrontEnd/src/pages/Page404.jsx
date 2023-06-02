import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate()
    useEffect(()=> {
        navigate("/")
    })

}

export default Page404