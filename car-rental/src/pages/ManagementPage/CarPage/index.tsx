import * as React from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { createFilterOptions } from '@mui/material'

import CreateCarForm from './CreateCarForm'

import { mainBoxStyles, paperStyles, useStyles } from './styles'

export const ManagementCarPage: React.FC = () => {
    const styles = useStyles()

    return (
        <Box component="main" sx={mainBoxStyles}>
            <Paper
                sx={{
                    p: 2,
                    paperStyles,
                    height: 540,
                }}
                className={styles.paper}
            >
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <CreateCarForm />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default ManagementCarPage
