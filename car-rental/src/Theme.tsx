import { createTheme } from '@mui/material/styles'

export const themeOptions = createTheme({
    palette: {
        primary: {
            main: '#1a1a1a',
        },
        secondary: {
            // '#ff2172'
            main: '#ff2172',
        },
        text: {
            primary: '#ffffff',
        },
        error: {
            main: '#ff2142',
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                listbox: {
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #ffffff',
                },
                clearIndicator: {
                    color: 'white',
                },
                popupIndicator: {
                    color: 'white',
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                    '&.Mui-focused': {
                        color: '#ff2172',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderColor: 'white',
                },
                notchedOutline: {
                    borderColor: 'white',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    '&&&:before': {
                        borderBottomColor: 'white',
                    },
                    '&&:after': {
                        borderBottom: '2px solid #ff2172',
                    },
                },
            },
        },
        MuiNativeSelect: {
            styleOverrides: {
                icon: {
                    color: 'white',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
                        {
                            display: 'none',
                        },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                },
            },
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1a1a1a',
                    color: '#ffffff',
                },
            },
        },
    },
})

export default themeOptions
