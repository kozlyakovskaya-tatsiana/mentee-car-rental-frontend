import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material'
import { AuthProvider } from './contextes/authContext'
import { PrivateRoute } from './components/PrivateRoute'

import { ADMIN_ROLE } from './shared/roles/Admin'

import Header from './components/AppBar'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ManagementPage from './pages/ManagementPage'
import ManagementCarPage from './pages/ManagementPage/CarPage'
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
                        <Route
                            path="/management/*"
                            element={
                                <PrivateRoute
                                    component={ManagementPage}
                                    roles={[ADMIN_ROLE]}
                                />
                            }
                        >
                            <Route path="car" element={<ManagementCarPage />} />
                            <Route
                                path="rental-point"
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
