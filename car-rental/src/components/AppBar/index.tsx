import React from 'react'
import { Link } from 'react-router-dom'

import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'

import { useAuth } from 'contextes/authContext'

import Logo from './Logo'
import ProfileCircle from './ProfileCircle'
import PinnedPages from './PinnedPages'

const Header = () => {
    const { isAuth } = useAuth()

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo />
                </Link>
                <PinnedPages />
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
