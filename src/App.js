
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Dash2 from './components/Dash2';
import Navbar2 from './components/Navbar2';
import Home5 from './components/Home5';
import Home6 from './components/Home6';
import Cards from './components/Cards';
import Image from './components/Image';
import DataView from './components/DataView';
import Login1 from './components/Login1';
import Orderthankyou from './components/Orderthankyou';
import Offers from './components/Offers';
import Navbarnew2 from './components/Navbarnew2';
import TableBooking from './components/TableBooking';
import ContactUs from './components/ContactUs';
import OrderForm from './components/OrderForm';
import Feedback from './components/Feedback';




function App() {
  return (
    <div className="App">
      {/* <ContactUs/> */}
      {/* <TableBooking/> */}
      {/* <Orderthankyou/> */}
      {/* <DataView/> */}
      {/* <Image/> */}
      {/* <Dash2/> */}
      {/* <Signup/> */}
      {/* <Dashboard/> */}
      {/* <Navbarnew2/> */}
      {/* <Offers/> */}
      {/* <Cards/> */}
      {/* <Navbar2/> */}
      {/* <Home5/> */}
      {/* <Login/> */}
      {/* <Feedback/> */}
      <Routes>
      <Route path='/' element={<><Dash2/><Home6/></>}/> 
      <Route path='/Login' element={<><Login1/></>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Home5' element={<><Navbar2/><Home5/></>}/>
      <Route path='/Cards' element={<><Navbar2/><Cards/>/<DataView/></>}/>
      <Route path='/Signup' element={<Login/>}/>
      <Route path='/TableBooking' element={<><TableBooking/></>}/>
      <Route path='/DataView' element={<><DataView/></>}/>
      <Route path="/order/:itemId" element={<OrderForm />} />
      <Route path='/Feedback' element={<><Feedback/></>}/>
    </Routes>

    </div>
  );
}

export default App;
