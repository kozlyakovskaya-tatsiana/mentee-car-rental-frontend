import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'

import Header from './components/Header'
import Main from './pages/Main'
import Authorize from './pages/Authorize'

import './App.scss'
import themeOptions from './Theme'

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={themeOptions}>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Login" element={<Authorize />} />
                </Routes>
            </ThemeProvider>
        </div>
    )
}

export default App
