import React from 'react'

import Typography from '@mui/material/Typography'

interface NotFoundProps {
    visible: boolean
}

export const NotFound: React.FC<NotFoundProps> = (props) => {
    const { visible } = props
    return visible ? (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="h1">Not found!</Typography>
        </div>
    ) : null
}

export default NotFound
