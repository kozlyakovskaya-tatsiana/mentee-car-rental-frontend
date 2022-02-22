import * as React from 'react'
import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'

import ToolBar from './ToolBar'

export const ManagementPage: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', height: 'calc(100vh - 69px)' }}>
            <ToolBar />
            <Outlet />
        </Box>
    )
}

export default ManagementPage
