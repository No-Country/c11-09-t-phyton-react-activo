import { createContext, useState, useEffect, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import  {getProfile}  from '../api/profile.api'
import AuthContext from './AuthContext';
const ProfileContext = createContext()

export default ProfileContext;

export const  ProfileProvider = ({children}) => {
    
    const  { user } = useContext(AuthContext)

    const [profile,setProfile] = useState([])
    const location = useLocation();

    
    useEffect(() => {
        if(user){
            async function ProfileApi(){
                const res = await getProfile(user.user_id);
                setProfile(res.data)
            }   
            ProfileApi()
        }
       
    },[location.pathname])
    
   
    let contextData = {
        profile:profile,
    }
    
    return (
        <ProfileContext.Provider value={contextData}>
            {children}
        </ProfileContext.Provider>
    )
}