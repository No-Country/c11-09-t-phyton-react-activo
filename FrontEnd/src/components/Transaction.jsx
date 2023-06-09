import { useContext, useEffect, useState } from "react"
import { getTransaction } from "../api/profile.api"
import AuthContext from "../context/AuthContext"
import transaction from '../styles/transaction.css'
const Transaction = ({id}) => {
    let { authTokens } = useContext(AuthContext)
    let [data,setData] = useState([])
    useEffect(() => {
        async function loadTransaction(){
            let res = await getTransaction(id,authTokens)
            console.log(res)
            setData(res.data)
        }
        
        loadTransaction()
        
    },[])
    return (
        <div className='transaction'>
            <p>Transaccion para el numero de tarjeta {data.card_user_to_transfer}  le transfirio {data.quantity}$</p>
            <p>Concepto: {data.concept}</p>
        </div>
    )
}

export default Transaction 