import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'

import Header from './components/AppBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ManagementPage from './pages/ManagementPage'

import './App.scss'
import themeOptions from './Theme'
import { verifyAccessToken } from './services/tokens.service'

const App = () => {
    useEffect(() => {
        verifyAccessToken().then(() => {})
    }, [])
    return (
        // <AuthContext>
        <div className="App">
            <ThemeProvider theme={themeOptions}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin/*" element={<ManagementPage />}>
                        <Route path="car" element={<LoginPage />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </div>
        // </AuthContext>
    )
}

export default App
