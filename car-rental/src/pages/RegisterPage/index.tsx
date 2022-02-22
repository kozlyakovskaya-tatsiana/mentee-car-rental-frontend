import React from 'react'

import Container from '@mui/material/Container'

import RegisterForm from './RegisterForm'
import Copyright from '../../components/Copyright'

const RegisterPage: React.FC = () => {
    return (
        <Container component="main" maxWidth="xs">
            <RegisterForm />
            <Copyright />
        </Container>
    )
}

export default RegisterPage
