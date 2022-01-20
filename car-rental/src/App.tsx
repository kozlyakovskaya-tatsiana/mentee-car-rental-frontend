import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import { AuthProvider } from './context/authContext'

import Header from './components/AppBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ManagementPage from './pages/ManagementPage'
import RegisterPage from './pages/RegisterPage'

import './App.scss'
import themeOptions from './Theme'

const App = () => {
    return (
        <AuthProvider>
            <div className="App">
                <ThemeProvider theme={themeOptions}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/admin/*" element={<ManagementPage />}>
                            <Route path="car" element={<LoginPage />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </div>
        </AuthProvider>
    )
}

export default App
