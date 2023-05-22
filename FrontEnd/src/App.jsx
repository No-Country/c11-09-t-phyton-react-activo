import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Index from './pages/Index'
import Cards from './pages/Cards'

import Profile from './pages/profile/Profile'
import DataProfile from './pages/profile/DataProfile'

import Activities from './pages/Activities'
import SendMoney from './pages/SendMoney'

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Security from './pages/profile/Security';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/cards" element={<Cards/>}></Route>
          <Route path="/actividad" element={<Activities/>}></Route>
          <Route path="/send-money" element={<SendMoney/>}></Route>

          <Route path="profile">
            <Route path="" element={<Profile/>}></Route>
            <Route path="my-data" element={<DataProfile/>}></Route>
            <Route path="SECURITY" element={<Security/>}></Route>

          </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
