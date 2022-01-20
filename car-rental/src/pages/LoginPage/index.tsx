import React from 'react'

import Container from '@mui/material/Container'

import LoginForm from './LoginForm'
import Copyright from '../../components/Copyright'

const LoginPage: React.FC = () => {
    return (
        <Container maxWidth="xs">
            <LoginForm />
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default LoginPage
