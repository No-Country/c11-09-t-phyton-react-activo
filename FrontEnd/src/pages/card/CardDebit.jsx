import { useState,useEffect,useContext } from "react";
import { getDebitCardApi } from '../../api/profile.api'
import AuthContext from "../../context/AuthContext";
import { Link } from 'react-router-dom';

const CardDebit = () => {
    let [creditDebit, setCreditDebit] = useState([])
    let { authTokens,logoutUser } = useContext(AuthContext)


    useEffect(() => {
        getDebitCard()
    },[])
    const getDebitCard = async () => {
        let response = await getDebitCardApi(authTokens)
        if(response.status === 200){
            setCreditDebit(response.data)
        }else{
            logoutUser()
        }
    }
    return (
        <div>

            {creditDebit?.nombre_titular != null ?
                <div>
                    <h1>Tu tarjeta de debito</h1>
                    <h3>{creditDebit?.nombre_titular}</h3>
                    <h3>Saldo Actual: {creditDebit?.saldo_actual}</h3>

                </div>
            :
            <div>
                <h1>No tienes tarjeta de debito</h1>
                <Link to="/profile/add-debit">Agregar</Link>
            </div>
            }
            
        </div>

    )
}
export default CardDebit;