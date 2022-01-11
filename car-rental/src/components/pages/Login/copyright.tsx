import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Copyright(props: any) {
    return (
        <Typography variant="body2" color="#ffffff" align="center">
            {'Copyright © '}
            <Link color="inherit" to="/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    )
}
