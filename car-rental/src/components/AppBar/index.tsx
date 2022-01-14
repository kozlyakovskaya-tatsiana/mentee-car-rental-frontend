import React from 'react'
import { Link } from 'react-router-dom'

import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'

import Logo from './Logo'
import ProfileCircle from './ProfileCircle'
import LoginSignUpButtons from './LoginSignUpButtons'
import PinnedPages from './PinnedPages'

const Header = () => {
    // Authenticate statement
    const [auth, setAuth] = React.useState(false)

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo />
                </Link>
                <PinnedPages />
                {auth ? <ProfileCircle /> : <LoginSignUpButtons />}
            </Toolbar>
        </AppBar>
    )
}

export default Header
