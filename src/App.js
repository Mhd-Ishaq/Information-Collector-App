import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import Users from './components/Users';
// import {AuthProvider}from './utility/auth';
// import RequireAuth from './components/RequireAuth'


const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home  />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:userId' element={ <UserDetails />}/>
      </Routes>
      
    </main>

  )
}

export default App