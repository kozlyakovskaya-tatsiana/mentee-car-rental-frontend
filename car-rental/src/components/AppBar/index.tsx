import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'

import Logo from './Logo'
import ProfileCircle from './ProfileCircle'
import LoginSignUpButtons from './LoginSignUpButtons'
import PinnedPages from './PinnedPages'
import { AuthContext } from '../../context/authContext'

const Header = () => {
    const { isAuth, changeAuth } = useContext(AuthContext)

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo />
                </Link>
                <PinnedPages />
                {isAuth ? <ProfileCircle /> : <LoginSignUpButtons />}
            </Toolbar>
        </AppBar>
    )
}

export default Header
