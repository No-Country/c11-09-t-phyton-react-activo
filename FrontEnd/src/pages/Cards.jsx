import { useState,useEffect,useContext } from "react";
import AuthContext from "../context/AuthContext";

const Cards = () => {
    let [creditCard, setCreditCard] = useState([])
    let { authTokens,logoutUser } = useContext(AuthContext)


    useEffect(() => {
        getCreditCard()
    },[])
    const getCreditCard = async () => {
        let response = await fetch('http://localhost:8000/api-cards/v1/credit',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access),
            },
        })
        let data = await response.json()
        if(response.status === 200){
            setCreditCard(data)
        }else{
            logoutUser()
        }
    }

    return (
        <div>
            <h1>Tu tarjeta de credito</h1>
            <h3>{creditCard[0]?.nombre_titular}</h3>
        </div>

    )
}
export default Cards;