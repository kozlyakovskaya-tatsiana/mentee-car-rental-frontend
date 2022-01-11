import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/pages/Main'
import Login from './components/pages/Login'

import './App.scss'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
