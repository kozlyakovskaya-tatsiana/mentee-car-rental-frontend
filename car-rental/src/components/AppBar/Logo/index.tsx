import React from 'react'

import Typography from '@mui/material/Typography'

const Logo = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            color="secondary"
        >
            Car Rental
        </Typography>
    )
}

export default Logo
