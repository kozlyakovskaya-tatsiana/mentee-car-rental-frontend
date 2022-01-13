import React from 'react'
import { Link } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import themeOptions from 'styles'

import RegisterForm from './RegisterForm'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link to="/" style={{ color: '#ff2172', textDecoration: 'none' }}>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    )
}

function Register() {
    return (
        <ThemeProvider theme={themeOptions}>
            <Container component="main" maxWidth="xs">
                <RegisterForm />
                <Copyright />
            </Container>
        </ThemeProvider>
    )
}

export default Register
