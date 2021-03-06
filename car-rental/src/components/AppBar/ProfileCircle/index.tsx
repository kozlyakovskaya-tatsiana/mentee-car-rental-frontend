import React from 'react'
import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { logout } from 'services/auth.service'
import { useAuth } from 'contextes/authContext'

import { settings } from '../consts'
import { linkStyle } from '../styles'

const ProfileCircle = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const { changeAuth, clearRoles } = useAuth()

    return (
        <div>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/2.jpg"
                        />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseNavMenu}>
                            <Link to={setting.toLowerCase()} style={linkStyle}>
                                <Typography
                                    textAlign="center"
                                    color="secondary"
                                >
                                    {setting}
                                </Typography>
                            </Link>
                        </MenuItem>
                    ))}
                    <MenuItem key="Logout" onClick={() => handleCloseNavMenu()}>
                        <Link
                            to="/"
                            style={linkStyle}
                            onClick={() => {
                                changeAuth(false)
                                clearRoles()
                                logout()
                            }}
                        >
                            <Typography textAlign="center" color="secondary">
                                Logout
                            </Typography>
                        </Link>
                    </MenuItem>
                </Menu>
            </Box>
        </div>
    )
}

export default ProfileCircle
