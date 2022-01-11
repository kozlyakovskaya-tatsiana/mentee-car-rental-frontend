import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Button from '@mui/material/Button'

import { createTheme, ThemeProvider } from '@mui/material'

const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#1a1a1a',
        },
        secondary: {
            main: '#ff2172',
        },
    },
})

function DesktopHeader() {
    // Authenticate statement
    const [auth, setAuth] = React.useState(false)

    return (
        <ThemeProvider theme={themeOptions}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        color="secondary"
                    >
                        Car Rental
                    </Typography>
                    {(auth && (
                        <div>
                            <AccountCircle />
                        </div>
                    )) || (
                        <div>
                            <Button
                                color="secondary"
                                onClick={() => setAuth(true)}
                            >
                                Login
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default DesktopHeader
