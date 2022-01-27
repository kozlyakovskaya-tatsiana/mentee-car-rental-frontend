import * as React from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import { mainBoxStyles, paperStyles } from './styles'

export const ManagementRentalPointsPage: React.FC = () => {
    return (
        <Box component="main" sx={mainBoxStyles}>
            <Grid container spacing={1}>
                <Grid item>
                    <Paper sx={paperStyles}>Box</Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ManagementRentalPointsPage
