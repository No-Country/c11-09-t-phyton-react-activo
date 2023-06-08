import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getDebitCardApi } from "../../api/profile.api";
import AuthContext from "../../context/AuthContext";

const AddDebitCard = () => {
    const { register, handleSubmit } = useForm();
    let { authTokens } = useContext(AuthContext)
    let navigate = useNavigate()
    
    async function response_credit(){
        let response_debit_card = await getDebitCardApi(authTokens)
        return response_debit_card.data
    }
    useEffect(() => {
        response_credit().then((data)=> {
            if(data.nombre_titular != null){
                navigate('/profile/card')
            }
        } )

    },[])


    const pushNameTitle = async (data) => {
        let data_debitcard = await response_credit()

         let response = await fetch(`http://localhost:8000/api-cards/v1/debit-update/${data_debitcard.id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access),
            },
            body: JSON.stringify({
                "nombre_titular": data.nombre_titular,
             })
        })
        if(response.status == 200){
            navigate("/profile/debit")
        }
    }
    return (
        <div>
            <h1>Agregar tarjeta</h1>
            <form onSubmit={handleSubmit(pushNameTitle)}>
                <div>
                    <input placeholder="Nombre del titular"
                    {...register("nombre_titular", { required: true })}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default AddDebitCard;