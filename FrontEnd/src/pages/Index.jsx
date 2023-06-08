import { Link } from 'react-router-dom'
const Index = () => {
   
    return (
        <div>
            <h1>Wowllet</h1>
            <Link style={{'color':'white'}} to="login">Login</Link>
        </div>
        
    )
}
export default Index;