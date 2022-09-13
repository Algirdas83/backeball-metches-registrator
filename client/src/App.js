
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Games from './games/Games.js'
import Admin from './admin/Admin.js'
import Login from './login/Login.js'
import Header from './header/Header';
import MainContext from './MainContext';

function App() {
  const [matches, setMaches] = useState([])
  const [pointsTable, setPointsTable] = useState([])
 

  const ContextValue = {matches, pointsTable, setPointsTable }

  useEffect(() => {

    axios.get('/api/maches/')
    .then(resp =>{
      console.log(resp.data);
         setMaches(resp.data )
    })
    .catch(error => console.log(error))

    axios.get('/api/points/')
    .then(resp => {
      
    })


},[])

  return (

    <BrowserRouter>
    <MainContext.Provider value={ContextValue}>
    <Header/>
      <Routes>
        <Route path='/' element = { <Games/> }/>
        <Route path='/login' element = { <Login /> }/>

        <Route path='/admin/:id' element = { <Admin/> }/>

      </Routes>
      </MainContext.Provider>
    </BrowserRouter>

    
  )
}

export default App;
