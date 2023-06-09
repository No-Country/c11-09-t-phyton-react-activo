import { useForm } from "react-hook-form";
import { useContext,useEffect,useState } from "react";
import { getDebitCardApi } from "../api/profile.api";
import AuthContext from "../context/AuthContext";
import {useNavigate} from "react-router-dom"
import send_money from '../styles/send-money.css'
const SendMoney = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    let { authTokens } = useContext(AuthContext)
    let [dataDebit,setDataDebit] = useState(null)

    useEffect(()=>{
        async function loadDataDebit(){
            return await getDebitCardApi(authTokens)
        }
        loadDataDebit().then(debit => setDataDebit(debit.data))
    },[])

    const onSubmit = async (data) => {
        let res = await fetch('http://localhost:8000/api-transaccion/v1/transferencia/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access),
            },
            body: JSON.stringify({
                "card_user":dataDebit.numero_tarjeta,
                "card_user_to_transfer":data.user_to_transfer,
                "concept":data.concept,
                "quantity":data.quantity
            }),
        })       
        if(res.status === 201){
            window.alert("Transferencia exitosa correctamente")
            navigate("/profile/debit")
        }else{
            window.alert("Error al hacer la transferencia")
        }
    }
    return (
        <div>
            <h1 className='transferir'>Transferir</h1>
            <div className='form'>
                <form className='form-send_money' onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <input autoComplete="off" placeholder="Numero de tarjeta del usuario al que quieres transferir"
                            {...register("user_to_transfer", { required: true })}/>
                        </div>
                        <div className='form-group'>
                            <input autoComplete="off" placeholder="Cantidad a transferir "
                            {...register("quantity", { required: true })}/>
                        </div >
                        <div className='form-group'>
                            <input autoComplete="off" placeholder="Concepto de la transferencia"
                            {...register("concept", { required: false })}/>
                        </div>
                    <input className='send_money_buttom' type="submit" value='Continuar'/>
                </form>
            </div>

           
        </div>
    )
}
export default SendMoney