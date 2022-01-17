import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'

import Header from './components/AppBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

import './App.scss'
import themeOptions from './Theme'

const App = () => {
    return (
        <div className="App">
            <ThemeProvider theme={themeOptions}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </ThemeProvider>
        </div>
    )
}

export default App
