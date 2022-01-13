import React from 'react'
import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'

function Logo() {
    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                color="secondary"
            >
                Car Rental
            </Typography>
        </Link>
    )
}

export default Logo
