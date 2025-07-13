import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import About from './pages/about/About'
import Destination from './pages/destination/Destination'
import Tips from './pages/tips/Tips'
import Footer from './components/footer/Footer'
import Contact from './pages/contact/Contact'
import Sidebar from './sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="about" element={<About />} />
        <Route path='destination' element={<Destination/>} />
        <Route path='tips' element={<Tips/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
