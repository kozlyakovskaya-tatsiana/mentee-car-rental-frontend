import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import { AuthProvider } from './context/authContext'

import Header from './components/AppBar'

import HomePage from './pages/HomePage'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import ManagementPage from './pages/ManagementPage'
import ManagementHomePage from './pages/ManagementPage/HomePage'
import ManagementCarPage from './pages/ManagementPage/CarPage'
import ManagementUserPage from 'pages/ManagementPage/UserPage'
import ManagementReportsPage from './pages/ManagementPage/ReportsPage'
import ManagementRentalPointsPage from './pages/ManagementPage/RentalPointsPage'

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
                            <Route
                                path="home"
                                element={<ManagementHomePage />}
                            />
                            <Route path="car" element={<ManagementCarPage />} />
                            <Route
                                path="user"
                                element={<ManagementUserPage />}
                            />
                            <Route
                                path="reports"
                                element={<ManagementReportsPage />}
                            />
                            <Route
                                path="rp"
                                element={<ManagementRentalPointsPage />}
                            />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </div>
        </AuthProvider>
    )
}

export default App
