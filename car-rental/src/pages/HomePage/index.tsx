import React, { Fragment } from 'react'
import { useFormik } from 'formik'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@material-ui/core/TextField'
import { Autocomplete, useTheme } from '@mui/material'

import { useAuth } from 'context/authContext'
import { papersHandlerStyle, lotPaperStyle, useStyles } from './styles'

// Countries from backend
const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    { code: 'AE', label: 'United Arab Emirates', phone: '971' },
]

interface CountryType {
    code: string
    label: string
    phone: string
}

const HomePage: React.FC = () => {
    const { isAuth } = useAuth()

    const styles = useStyles()
    const theme = useTheme()

    const formik = useFormik({
        initialValues: {},
        onSubmit: (values: any) => {
            console.log(values)
        },
    })

    return (
        <div>
            {isAuth ? (
                <Box component="main" style={papersHandlerStyle}>
                    <Paper sx={lotPaperStyle}>
                        <Autocomplete
                            classes={{
                                inputRoot: styles.autoComplete,
                                paper: styles.paper,
                            }}
                            id="country-select"
                            options={countries.map(
                                (option: CountryType) => option.label
                            )}
                            forcePopupIcon={false}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    className={styles.field}
                                    label="Country"
                                    margin="normal"
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps,
                                        readOnly: true,
                                        classes: {
                                            root: styles.input,
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: styles.label,
                                        },
                                    }}
                                />
                            )}
                        />
                    </Paper>
                </Box>
            ) : (
                <div />
            )}{' '}
        </div>
    )
}

export default HomePage
