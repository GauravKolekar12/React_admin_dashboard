import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'

import './App.css'
import Employee from './Components/Employee'
import Empregister from './Components/Empregister'
import Empedit from './Components/Empedit'

const App = () => {
  return (
    <>
    <Router>
      <div className='app'>
        <Sidebar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/employee' element={<Employee/>}></Route>
            <Route path='/empedit/:id' element={<Empedit/>}></Route>
            <Route path='/empregister' element={<Empregister/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>

    
    </>
  )
}

export default App