import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'

function Login() {
    return (
        <div>
            <Link to="login" style={{ textDecoration: 'none' }}>
                <Button color="secondary">Login</Button>
            </Link>
        </div>
    )
}

export default Login
