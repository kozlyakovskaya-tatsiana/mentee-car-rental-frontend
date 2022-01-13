import React from 'react'

import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
import { useForm, SubmitHandler } from 'react-hook-form'

import themeOptions from './styles'

import LoginForm from './LoginForm'
import Copyright from './copyright'

function Login() {
    return (
        <ThemeProvider theme={themeOptions}>
            <Container maxWidth="xs">
                <LoginForm />
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

export default Login
