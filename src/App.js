import {BrowserRouter,Route,Routes} from 'react-router-dom'

import './App.css';
import Company from './components/Company';
import Home from './components/Home';
import Jobportal from './components/Jobportal'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/companyprofile'  element={<Company/>} />
      <Route path='/jobportal' element={<Jobportal/>}/>


     
    </Routes>
    </BrowserRouter>
   
  )
}

export default App;
