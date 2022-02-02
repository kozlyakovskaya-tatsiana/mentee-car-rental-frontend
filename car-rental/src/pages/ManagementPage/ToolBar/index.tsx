import * as React from 'react'
import { List, useTheme } from '@mui/material'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { ChevronRight } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import itemsList from './lists'
import { Drawer, toolBarStyles, useStyles } from '../styles'

export const ToolBar: React.FC = () => {
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
        </Box>
    )
}

export default ToolBar
