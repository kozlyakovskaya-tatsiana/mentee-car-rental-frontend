import React from 'react'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import useStyles from './styles'

type FormValues = {
    email: string
    password: string
}

function LoginForm() {
    const styles = useStyles()

    const { control, handleSubmit } = useForm<FormValues>()
    const onSubmit = async (data: FormValues) => {
        console.log(data)
    }

    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                marginTop: 8,
                marginBottom: 1,
                padding: 6,
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color="text.primary">
                Sign in
            </Typography>
            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
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
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => (
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
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
            />
            <Link
                to="/restore"
                style={{
                    fontSize: 10,
                    color: 'white',
                    textAlign: 'left',
                    margin: 0,
                    padding: 0,
                    textDecoration: 'none',
                    marginLeft: 'auto',
                }}
            >
                Forgot password?
            </Link>
            <Box sx={{ mt: 1, width: '100%' }}>
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
                <Grid
                    container
                    style={{ display: 'block', textAlign: 'center' }}
                >
                    <Grid item xs>
                        <Link to="/Signup" className={styles.text}>
                            Don&apos;t have an account? Sign Up
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default LoginForm
