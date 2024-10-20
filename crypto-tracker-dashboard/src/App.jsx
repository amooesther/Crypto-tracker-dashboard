import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'



const App = () => {
  return (
    <div className='app'>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/coin/:coinId' element={<Coin/>}/>
   </Routes>
   <Footer/>
    </div>
  )
}

export default App