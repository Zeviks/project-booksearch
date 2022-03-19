import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.component'
import Hero from './components/Hero/Hero.component'
import axios from 'axios'


const App = () => {
  const bookData = async () => {
    const res = await axios('https://api.itbook.store/1.0/search/mongodb')
    .then(res => {
      const resData = res.data;
    })
    return resData;   
  }
  bookData()

  return (
    <div className='App'>
      <Navbar />
      <Hero bookData={resData}/>
    </div>
  )
}

export default App