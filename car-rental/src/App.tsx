import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ManagementUserPage from 'pages/ManagementPage/UserPage'

import { ThemeProvider } from '@mui/material'
import { AuthProvider } from './contextes/authContext'
import { PrivateRoute } from './components/PrivateRoute'

import { ADMIN_ROLE } from './shared/roles/Admin'

import Header from './components/AppBar'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import CarListComponent from './pages/HomePage/CarListComponent'

import ManagementPage from './pages/ManagementPage'
import ManagementHomePage from './pages/ManagementPage/HomePage'
import ManagementCarPage from './pages/ManagementPage/CarPage'

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
                        <Route
                            path="/management/*"
                            element={
                                <PrivateRoute
                                    component={ManagementPage}
                                    roles={[ADMIN_ROLE]}
                                />
                            }
                        >
                            {/* <Route */}
                            {/*    path="home" */}
                            {/*    element={<ManagementHomePage />} */}
                            {/* /> */}
                            <Route path="car" element={<ManagementCarPage />} />
                            {/* <Route */}
                            {/*    path="user" */}
                            {/*    element={<ManagementUserPage />} */}
                            {/* /> */}
                            {/* <Route */}
                            {/*    path="reports" */}
                            {/*    element={<ManagementReportsPage />} */}
                            {/* /> */}
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
