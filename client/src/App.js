import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Addcontacts from './components/contact/Addcontact';
import Contact from './components/contact/Contact';
import Editcontact from './components/contact/Editcontact';
import Contacts from './components/contact/Contacts';


function App() {

  let [getloading, setGetloading] = useState(false)
  let [getcontacts, setGetcontacts] = useState([])

  return (
    <div className="App">

      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Navigate to = "/contacts"/>}/> */}
        <Route path='/contact/add' element={<Addcontacts />} />
        <Route path='/contacts ' element={<Contacts contacts={getcontacts} loading={getloading} />} />
        <Route path='/contacts/:contactId' element={<Contact />} />
        <Route path='/contacts/edit/:contactId' element={<Editcontact />} />
      </Routes>
    </div>
  );
}

export default App;
