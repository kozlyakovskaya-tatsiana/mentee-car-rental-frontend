import React from 'react'
import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { useStyles } from './styles'

function FormFooterComponent() {
    const styles = useStyles()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
    }
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <Grid container>
                <Grid item xs>
                    <Link to="restore" className={styles.text}>
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/Signup" className={styles.text}>
                        Don&apos;t have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FormFooterComponent
