import React from 'react'
import Typography from '@mui/material/Typography'

export const NotFound: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="h1">Not found!</Typography>
        </div>
    )
}

export default NotFound
