import axios from "axios";
export function getProfile(id){
    return axios.get(`http://localhost:8000/api-profile/v1/profile/${id}/`)
}

export function updateProfile(id,data){
    return axios.put(`http://localhost:8000/api-profile/v1/profile/${id}/`,data)
}

export function createUser(data){
    return axios.post(`http://localhost:8000/api/accounts/register`,data)

}

export function getCreditCardApi(authTokens){
    return axios.get('http://localhost:8000/api-cards/v1/credit',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access),
        },
    })

}

export function getDebitCardApi(authTokens){
    return axios.get('http://localhost:8000/api-cards/v1/debit',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access),
        },
    })

}
