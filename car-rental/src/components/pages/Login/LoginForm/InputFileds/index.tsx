import React from 'react'

import TextField from '@mui/material/TextField'

import useStyles from './styles'

function InputFiled() {
    const styles = useStyles()

    return (
        <>
            <TextField
                className={styles.field}
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                inputProps={{
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
            <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{
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
        </>
    )
}

export default InputFiled
