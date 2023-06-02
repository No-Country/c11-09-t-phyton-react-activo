import {AuthProvider} from './context/AuthContext'
import IndexRouter from './router/IndexRouter'

function App() {
  return (
    <>
        <AuthProvider>
          <IndexRouter/>
        </AuthProvider>
    </>

    
  )
}

export default App
