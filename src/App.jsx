import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Main from "./pages/Main"
import Detail from './pages/Detail'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { create } from './redux/api'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const allPokemon = []
    const fetchAPI = async () => {
      for (let i = 1; i <= 2; i++) {
        const response = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)).data;
        const ko_response = await (await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`)).data
        const ko_text = ko_response.flavor_text_entries.find(item => item.language.name === 'ko').flavor_text
        const ko_name = ko_response.names.find(item => item.language.name === 'ko').name

        const data = {
          id: response.id,
          name: ko_name,
          text: ko_text,
          img: {
            front: response.sprites.other.showdown.front_default,
            back: response.sprites.other.showdown.back_default
          }
        }
        allPokemon.push(data)
      }
      dispatch(create(allPokemon))
    }
    fetchAPI()
  }, [])

  

  return (
    <>
      <div className='bg-slate-500 flex flex-col w-screen h-screen'>
        <header>
          <div className='bg-red-700 w-full h-24'></div>
          <div className='bg-white h-2'></div>
          <h1 className='bg-black text-white p-6'>포켓몬 도감</h1>

          <nav className='flex p-2 justify-center'>
            <input className='border rounded-2xl' type='text' />
            <button className='ml-5'>검색</button>
            <hr />
          </nav>
        </header>

        <main className='bg-slate-600 grow'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Detail/:id' element={<Detail />} />
            <Route path='/Search' element={<Search />} />
            <Route path='/Favorites' element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
