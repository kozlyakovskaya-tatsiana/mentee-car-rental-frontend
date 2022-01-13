import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Main from './pages/Main'
import Authorize from './pages/Authorize'

import './App.scss'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Login" element={<Authorize />} />
            </Routes>
        </div>
    )
}

export default App
