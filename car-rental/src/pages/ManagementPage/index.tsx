import * as React from 'react'

import { styled } from '@mui/material/styles'
import { List, useTheme } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { ChevronRight } from '@mui/icons-material'
import BuildIcon from '@mui/icons-material/Build'

import { mainBoxStyles, paperStyles, toolBarStyles, useStyles } from './styles'
import { itemsList } from './lists'

const drawerWidth: number = 300

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(7),
            },
        }),
    },
}))

export const ManagementPage: React.FC = () => {
    const [open, setOpen] = React.useState(true)
    const toggleDrawer = () => {
        setOpen(!open)
    }

    const theme = useTheme()
    const styles = useStyles()

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                open={open}
                classes={{ paper: styles.paper }}
            >
                <Toolbar sx={{ toolBarStyles, px: [1] }}>
                    <IconButton
                        onClick={toggleDrawer}
                        style={{ color: 'white' }}
                    >
                        {open ? <ChevronLeftIcon /> : <ChevronRight />}
                    </IconButton>
                    {open ? (
                        <Typography color={theme.palette.secondary.main}>
                            Tools
                        </Typography>
                    ) : (
                        <div>{null}</div>
                    )}
                </Toolbar>
                <Divider />
                {open ? <List>{itemsList}</List> : <div>{null}</div>}
            </Drawer>
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
                                <Typography
                                    color={theme.palette.secondary.main}
                                >
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
                                <Typography
                                    color={theme.palette.secondary.main}
                                >
                                    Someone else
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper
                                sx={{ p: 2, paperStyles }}
                                className={styles.paper}
                            >
                                <Typography
                                    color={theme.palette.secondary.main}
                                >
                                    Last user&lsquo;s operations
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default ManagementPage
