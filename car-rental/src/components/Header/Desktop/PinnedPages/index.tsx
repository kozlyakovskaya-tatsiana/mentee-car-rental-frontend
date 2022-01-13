import React from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { pages } from '../styles'

function PinnedPages() {
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
