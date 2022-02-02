import * as React from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import CreateCarForm from './CreateCarForm'

import { mainBoxStyles, paperStyles, useStyles } from './styles'

export const ManagementCarPage: React.FC = () => {
    const styles = useStyles()
    return (
        <Box component="main" sx={mainBoxStyles}>
            <Grid container spacing={1}>
                <Grid item xs={6} md={4}>
                    <Paper
                        sx={{
                            p: 2,
                            paperStyles,
                            height: 540,
                        }}
                        className={styles.paper}
                    >
                        <CreateCarForm />
                    </Paper>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Paper
                        sx={{
                            p: 2,
                            paperStyles,
                            height: 540,
                        }}
                        className={styles.paper}
                    >
                        Car Configuration List
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ManagementCarPage
