import React from 'react'
import { ThemeProvider } from '@mui/material'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import themeOptions from './styles'

import Logo from './Logo'
import PinnedPages from './PinnedPages'
import Profile from './Profile'
import Login from './Login'

function DesktopHeader() {
    // Authenticate statement
    const [auth, setAuth] = React.useState<boolean>(true)

    return (
        <ThemeProvider theme={themeOptions}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Logo />
                    <PinnedPages />
                    {/*auth ? <Profile /> :*/ <Login />}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default DesktopHeader
