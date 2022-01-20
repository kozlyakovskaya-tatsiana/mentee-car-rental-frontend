import React from 'react'

import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function Copyright(props: any) {
    return (
        <Typography variant="body2" color="#ffffff" align="center">
            {'Copyright © '}
            <Link
                color="inherit"
                to="/"
                style={{ color: '#ff2172', textDecoration: 'none' }}
            >
                Car Rental Site
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    )
}
