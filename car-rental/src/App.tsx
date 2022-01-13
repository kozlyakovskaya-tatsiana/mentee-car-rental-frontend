import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import Header from './components/Header'
import Main from './components/pages/Main'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

import './App.scss'
import themeOptions from './styles'

function App() {
    return (
        <ThemeProvider theme={themeOptions}>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </div>
        </ThemeProvider>
    )
}

export default App
