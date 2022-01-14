import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'

import Header from './components/AppBar'
import Main from './pages/Main'
import Login from './pages/Login'

import './App.scss'
import themeOptions from './Theme'

const App = () => {
    return (
        <div className="App">
            <ThemeProvider theme={themeOptions}>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </ThemeProvider>
        </div>
    )
}

export default App
