import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { pages } from '../consts'

const PinnedPages = () => {
    const navigate = useNavigate()
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="secondary"
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                }}
            >
                LOGO
            </Typography>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                }}
            >
                {localStorage.getItem('roles') === 'superadmin' ? (
                    <Button
                        key="management"
                        sx={{
                            my: 2,
                            color: 'white',
                            display: 'block',
                        }}
                        onClick={() => navigate('management')}
                    >
                        Management
                    </Button>
                ) : null}
                {pages.map((page) => (
                    <Link
                        to={page.toLowerCase()}
                        key={page}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            key={page}
                            sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                            }}
                        >
                            {page}
                        </Button>
                    </Link>
                ))}
            </Box>
        </>
    )
}

export default PinnedPages
