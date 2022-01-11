import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'

function LoginComponent() {
    return (
        <div>
            <Link to="Login" style={{ textDecoration: 'none' }}>
                <Button color="secondary">Login</Button>
            </Link>
        </div>
    )
}

export default LoginComponent