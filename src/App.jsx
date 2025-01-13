import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Main from "./pages/Main"
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorites from './pages/Favorites'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Detail/:id' element={<Detail />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
