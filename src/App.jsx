import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'

import Landing from './components/Landing';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Detail from './components/Detail';
import NavBar from './components/NavBar';

function App() {

	const { pathname } = useLocation(); 


  return (
		<div>
			{ pathname !== '/' ? <NavBar /> : null }
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/home' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='*' element={<Landing />} />
			</Routes>

		</div>
  )
}

export default App;
