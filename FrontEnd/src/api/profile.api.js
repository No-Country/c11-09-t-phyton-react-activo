import axios from "axios";
export function getProfile(id){
    return axios.get(`http://localhost:8000/api-profile/v1/profile/${id}/`)
}

export function updateProfile(id,data){
    return axios.put(`http://localhost:8000/api-profile/v1/profile/${id}/`,data)
}
