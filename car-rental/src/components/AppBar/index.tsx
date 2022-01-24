import React from 'react'
import { Link } from 'react-router-dom'

import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'

import Logo from './Logo'
import ProfileCircle from './ProfileCircle'
import PinnedPages from './PinnedPages'
import { useAuth } from '../../context/authContext'

const Header = () => {
    const { isAuth, changeAuth } = useAuth()

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo />
                </Link>
                <PinnedPages />
                <div style={{ marginRight: '25px' }}>
                    Is it your city? Hrodno
                </div>
                {isAuth ? (
                    <ProfileCircle />
                ) : (
                    <>
                        <Link to="register" style={{ textDecoration: 'none' }}>
                            <Button color="secondary">Sign Up</Button>
                        </Link>
                        <Link to="login" style={{ textDecoration: 'none' }}>
                            <Button color="secondary">Login</Button>
                        </Link>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header
