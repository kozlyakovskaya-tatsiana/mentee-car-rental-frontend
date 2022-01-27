import React from 'react'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

export const MapComponent: React.FC = () => {
    return (
        <Box
            component="div"
            sx={{
                padding: '10px',
                height: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                Google Map
            </Paper>
        </Box>
    )
}

export default MapComponent
