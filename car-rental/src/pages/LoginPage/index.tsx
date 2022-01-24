import React from 'react'

import Container from '@mui/material/Container'

import Copyright from 'components/Copyright'
import LoginForm from './LoginForm'

const LoginPage: React.FC = () => {
    return (
        <Container maxWidth="xs">
            <LoginForm />
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default LoginPage
