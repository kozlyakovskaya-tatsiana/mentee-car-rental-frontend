import React from 'react'
import Typography from '@mui/material/Typography'

import DoDisturbOffIcon from '@mui/icons-material/DoDisturbOff'

const AccessDenied: React.FC = () => {
    return (
        <div
            style={{
                height: '700px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <DoDisturbOffIcon style={{ fontSize: 72 }} color="secondary" />
            <Typography variant="h1" color="white">
                Access denied!
            </Typography>
        </div>
    )
}

export default AccessDenied
