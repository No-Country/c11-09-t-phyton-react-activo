import { useState,useEffect,useContext } from "react";
import { getCreditCardApi } from '../../api/profile.api'
import AuthContext from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import credit from '../../styles/credit.css'
import InfoTarget from '../../assets/card_avatar_one.png'
import CloseTarget from '../../assets/card_avatar_two.png'
import ConfigTarget from '../../assets/card_avatar_third.png'

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
                    <h1 className='credit'>Tu tarjeta de credito</h1>
                    <div className='card'>
                        <div className='card_credit'>
                            <h3 className='name-title'>{creditCard?.nombre_titular}</h3>
                            <h3  className='name-target'>{creditCard?.numero_tarjeta}</h3>
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