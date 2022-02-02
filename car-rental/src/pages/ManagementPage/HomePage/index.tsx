import * as React from 'react'
import { useTheme } from '@mui/material'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { mainBoxStyles, paperStyles, useStyles } from './styles'

export const ManagementHomePage: React.FC = () => {
    const theme = useTheme()
    const styles = useStyles()
    return (
        <Box component="main" sx={mainBoxStyles}>
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 2,
                                paperStyles,
                                height: 540,
                            }}
                            className={styles.paper}
                        >
                            <Typography color={theme.palette.secondary.main}>
                                Cars rented statistic
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                paperStyles,
                                height: 540,
                            }}
                            className={styles.paper}
                        >
                            <Typography color={theme.palette.secondary.main}>
                                Someone else
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper
                            sx={{ p: 2, paperStyles }}
                            className={styles.paper}
                        >
                            <Typography color={theme.palette.secondary.main}>
                                Last user&lsquo;s operations
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ManagementHomePage
