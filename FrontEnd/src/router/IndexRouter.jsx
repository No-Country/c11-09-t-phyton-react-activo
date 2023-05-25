import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Index from '../pages/Index'
import IndexUser from '../pages/IndexUser'

import Cards from '../pages/Cards'

import Profile from '../pages/profile/Profile'
import DataProfile from '../pages/profile/DataProfile'

import Activities from '../pages/Activities'
import SendMoney from '../pages/SendMoney'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Security from '../pages/profile/Security';
import Logeed from '../pages/Logeed';
import LogUp from '../pages/LogUp';
import LogIn from '../pages/LogIn';
import Page404 from '../pages/Page404';
import {useContext} from 'react'
import AuthContext from '../context/AuthContext';

function IndexRouter() {
  let {user} = useContext(AuthContext)
  return (
    <Router>
      <Navbar />
  
      <Routes>
        {user ? (
          <>
            <Route path="/logeed" element={<Logeed />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/actividad" element={<Activities />} />
            <Route path="/send-money" element={<SendMoney />} />
            <Route path="/" element={<IndexUser />} />
  
            <Route path="profile">
              <Route path="" element={<Profile />} />
              <Route path="my-data" element={<DataProfile />} />
              <Route path="security" element={<Security />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/logup" element={<LogUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<Index />} />
          </>
        )}
  
        <Route path="*" element={<Page404 />} />
      </Routes>
  
      <Footer />
    </Router>
  );
}

export default IndexRouter
