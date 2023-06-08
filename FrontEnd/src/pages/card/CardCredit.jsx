import { useState,useEffect,useContext } from "react";
import { getCreditCardApi } from '../../api/profile.api'
import AuthContext from "../../context/AuthContext";
import { Link } from 'react-router-dom';

const CardCredit = () => {
    let [creditCard, setCreditCard] = useState([])
    let { authTokens,logoutUser } = useContext(AuthContext)


    useEffect(() => {
        getCreditCard()
    },[])
    const getCreditCard = async () => {
        let response = await getCreditCardApi(authTokens)

        if(response.status === 200){
            setCreditCard(response.data)
        }else{
            logoutUser()
        }
    }
    return (
        <div>

            {creditCard?.nombre_titular != null ?
                <div>
                    <h1>Tu tarjeta de credito</h1>
                    <h3>{creditCard?.nombre_titular}</h3>
                    <h3>Saldo Actual: {creditCard?.saldo_actual}</h3>

                </div>
            :
            <div>
                <h1>No tienes tarjeta de credito</h1>
                <Link to="/profile/add-credit">Agregar</Link>
            </div>
            }
            
        </div>

    )
}
export default CardCredit;