import React from 'react'
import { ThemeProvider } from '@mui/material'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import themeOptions from './styles'

import LogoComponent from './LogoComponent'
import PinnedPagesComponent from './PinnedPagesComponent'
import ProfileComponent from './ProfileComponent'
import LoginComponent from './LoginComponent'

function DesktopHeader() {
    // Authenticate statement
    const [auth, setAuth] = React.useState(false)

    return (
        <ThemeProvider theme={themeOptions}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <LogoComponent />
                    <PinnedPagesComponent />
                    {(auth && <ProfileComponent />) || <LoginComponent />}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default DesktopHeader
