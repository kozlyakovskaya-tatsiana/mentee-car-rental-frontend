import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'

const LoginSignUpButtons = () => {
    return (
        <div>
            <Link to="register" style={{ textDecoration: 'none' }}>
                <Button color="secondary">Sign Up</Button>
            </Link>
            <Link to="login" style={{ textDecoration: 'none' }}>
                <Button color="secondary">Login</Button>
            </Link>
        </div>
    )
}

export default LoginSignUpButtons
