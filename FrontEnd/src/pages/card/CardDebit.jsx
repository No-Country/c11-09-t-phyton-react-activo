import { useState,useEffect,useContext } from "react";
import { getDebitCardApi } from '../../api/profile.api'
import AuthContext from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import debit from '../../styles/debit.css'
import InfoTarget from '../../assets/card_avatar_one.png'
import CloseTarget from '../../assets/card_avatar_two.png'
import ConfigTarget from '../../assets/card_avatar_third.png'
import Transaction from "../../components/Transaction";
const CardDebit = () => {
    let [creditDebit, setCreditDebit] = useState([])
    let [transactionsUser, setTransactionsUser] = useState([])

    let { authTokens,logoutUser } = useContext(AuthContext)


    useEffect(() => {
        getDebitCard()
        Transactions()
    },[])
    const getDebitCard = async () => {
        let response = await getDebitCardApi(authTokens)
        if(response.status === 200){
            setCreditDebit(response.data)
        }else{
            logoutUser()
        }
    }
    const Transactions = async () => {
        let res = await fetch('http://localhost:8000/api-transaccion/v1/transactions_user',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access),
            },
        })
        let data = await res.json()
        setTransactionsUser(data.transactions_user)
    }
    return (
        <div>

            {creditDebit?.nombre_titular != null ?
                <div>
                <h1 className='debit'>Tu tarjeta de debito</h1>
                <div className='card'>
                    <div className='card_debit'>
                        <h3 className='name-title'>{creditDebit?.nombre_titular}</h3>
                        <h3  className='name-target'>{creditDebit?.numero_tarjeta}</h3>
                    </div>
                    <div className='data_card'>
                        <div className='one_data'>
                            <img src={InfoTarget} alt='ver tarjeta' />
                            <p className='action'>Ver Info</p>

                        </div>
                        <div className='second_data'>
                            <p className='action'>Bloquear tarjeta</p>
                            <img src={CloseTarget} alt='ver tarjeta' />

                        </div>
                        <div className='third_data'>
                            <p className='action'>Configuracion de tarjeta</p>
                            <img  src={ConfigTarget} alt='ver tarjeta' />

                        </div>

                    </div>
                </div>
                <div className='transactions'>
                    <h1>Transacciones</h1>
                   
                    {transactionsUser.length > 0 ? <div>
                        {transactionsUser.map((transaction,index) => {
                            return <Transaction key={index} id={transaction} />
                        })}
                        <h2 style={{'marginTop':'7em'}}>Saldo: {creditDebit?.saldo_actual}$</h2>
                    </div>:
                    <h2>No tienes historial</h2>}
                </div>
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