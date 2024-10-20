import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './assets/Pages/Home/Home'
import Coin from './assets/Pages/Coin/Coin'
import Footer from './Components/Footer/Footer'



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