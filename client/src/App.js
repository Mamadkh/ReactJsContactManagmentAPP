import './App.css';
import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';
import Contact from './components/contact/Contact';
import Editcontact from './components/contact/Editcontact';
import Addcontacts from './components/contact/Addcontacts'
import { useState } from 'react';
import {Routes,Route} from "react-router-dom";

function App() {

  let[getloading , setGetloading] = useState(false)
  let[getcontacts,setGetcontacts] = useState([])

 return (
   <div className="App">
     
     <Navbar/>
     <Routes>
       {/* <Route path='/' element={<Navigate to = "/contacts"/>}/> */}
       <Route path='/contact/add' element={<Addcontacts/>}/>
       <Route path='/contacts ' element={<Contacts contacts={getcontacts} loading={getloading}/>}/>
       <Route path='/contacts/:contactId' element={<Contact/>}/>
       <Route path='/contacts/edit/:contactId' element={<Editcontact/>}/>
     </Routes>
   </div>
 );
}

export default App;
