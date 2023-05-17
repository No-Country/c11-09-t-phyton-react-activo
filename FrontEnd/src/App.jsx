import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Index from './pages/Index'
import Cards from './pages/Cards'
import Profile from './pages/Profile'
import Activities from './pages/Activities'
import SendMoney from './pages/SendMoney'

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Logeed from './pages/Logeed';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/logeed" element={<Logeed/>}></Route>
          <Route path="/cards" element={<Cards/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/actividad" element={<Activities/>}></Route>
          <Route path="/send-money" element={<SendMoney/>}></Route>

      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
