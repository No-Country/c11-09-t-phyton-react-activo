import axios from "axios";
export default function getUsersAll(){
    return axios.get('http://localhost:8000/api/v1/users/')
}