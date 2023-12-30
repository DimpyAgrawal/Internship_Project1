import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import DeleteModal from './components/DeleteModal'



export default function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Dashboard/>
        <Routes>
        {/* <Route exact path='/' element={<A/>} /> */}
        <Route exact path="/" component={App} />
        <Route path="/delete" component={DeleteModal} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
