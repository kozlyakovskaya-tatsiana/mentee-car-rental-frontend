import React, { ComponentProps, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { useTheme } from '@mui/material'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import useStyles, { boxStyle, linkStyle } from './styles'
import { login } from '../../../services/auth.service'

type FormValues = {
    email: string
    password: string
}

const LoginForm = () => {
    const styles = useStyles()
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const theme = useTheme()

    const { control, handleSubmit } = useForm<FormValues>()
    const onSubmit = async (data: FormValues) => {
        console.log(data)
        login(data.email, data.password).then(
            () => {
                window.location.reload()
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString()

                setLoading(false)
                setMessage(resMessage)
            }
        )
    }

    return (
        <Box
            sx={boxStyle}
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography
                component="h1"
                variant="h5"
                color={theme.palette.text.primary}
            >
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
            <Link to="/restore" style={linkStyle}>
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
