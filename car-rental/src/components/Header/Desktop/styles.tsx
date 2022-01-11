import React from 'react'
import { createTheme } from '@mui/material'

const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#1a1a1a',
        },
        secondary: {
            main: '#ff2172',
        },
    },
})

export const pages = ['Rights']
export const settings = ['Profile', 'Account', 'Logout']

export default themeOptions
