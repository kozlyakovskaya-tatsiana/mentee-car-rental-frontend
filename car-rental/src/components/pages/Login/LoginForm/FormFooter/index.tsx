import React from 'react'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { useStyles } from './styles'

type FormValues = {
    email: string
    password: string
}

function FormFooter() {
    const styles = useStyles()
    const { register, handleSubmit } = useForm<FormValues>()
    // eslint-disable-next-line no-console
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1, width: '100%' }}
        >
            <FormControlLabel
                control={
                    <Checkbox
                        className={styles.checkbox}
                        value="remember"
                        color="secondary"
                    />
                }
                label={
                    <Typography className={styles.controlLabel}>
                        Remember me
                    </Typography>
                }
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
            >
                Sign In
            </Button>
            <Grid container style={{ display: 'block', textAlign: 'center' }}>
                <Grid item xs>
                    <Link to="/Signup" className={styles.text}>
                        Don&apos;t have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FormFooter
