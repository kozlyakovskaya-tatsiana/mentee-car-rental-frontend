import { createTheme } from '@mui/material/styles'

export const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#1a1a1a',
        },
        secondary: {
            main: '#ff2172',
        },
        text: {
            primary: '#ffffff',
        },
        error: {
            main: '#ff2142',
        },
    },
})

export default themeOptions
