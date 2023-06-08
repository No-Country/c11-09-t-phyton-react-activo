import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Index from '../pages/Index'
import IndexUser from '../pages/IndexUser'

import AddCreditCard from '../pages/card/AddCard'
import CardCredit from '../pages/card/CardCredit';

import Profile from '../pages/profile/Profile'
import DataProfile from '../pages/profile/DataProfile'

import Activities from '../pages/Activities'
import SendMoney from '../pages/SendMoney'
import Security from '../pages/profile/Security';
import LogUp from '../pages/LogUp';
import LogIn from '../pages/LogIn';
import Page404 from '../pages/Page404';
import {useContext} from 'react'
import AuthContext from '../context/AuthContext';
import FormEdit from '../pages/profile/FormEdit';
import LayoutElement from '../pages/LayoutElement';
import AddDebitCard from '../pages/card/AddDebit';
import CardDebit from '../pages/card/CardDebit';

function IndexRouter() {
  let {user} = useContext(AuthContext)
  return (

    <Router>
        <Routes >
          <Route element={<LayoutElement/>}>
            {user ? (
              <>
                <Route path="/actividad" element={<Activities />} />
                <Route path="/send-money" element={<SendMoney />} />
                <Route path="/" element={<IndexUser />} />
                <Route path="profile">
                  <Route path="" element={ <Profile />} />
                  <Route path="credit" element={<CardCredit />} />
                  <Route path="debit" element={<CardDebit />} />
                  <Route path="add-credit" element={<AddCreditCard />} />
                  <Route path="add-debit" element={<AddDebitCard />} />
                  <Route path="my-data" element={ <DataProfile />}/>
                  <Route path="security" element={<Security/>} />   
                  <Route path="my-data/update" element={<FormEdit /> } />          
                </Route>
                <Route path="*" element={<Page404 />} />

              </>
            ) : (
              <>
                <Route path="/logup" element={<LogUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/" element={<Index />} />
                <Route path="*" element={<Page404 />} />
              </>
            )}

          </Route>
          

        </Routes>

      </Router> 

    
  );
}

export default IndexRouter
