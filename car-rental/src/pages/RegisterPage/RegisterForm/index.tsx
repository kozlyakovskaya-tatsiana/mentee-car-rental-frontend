import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useTheme } from '@mui/material'
import { Link } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

import useStyles from './styles'

type FormValues = {
    firstName: string
    lastName: string
    email: string
    password: string
}

function RegisterForm() {
    const styles = useStyles()
    const theme = useTheme()

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
                Sign up
            </Typography>
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    className={styles.field}
                                    color="secondary"
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
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
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    className={styles.field}
                                    color="secondary"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
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
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
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
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
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
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <TextField
                                    className={styles.field}
                                    color="secondary"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
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
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={styles.checkbox}
                                    value="allowExtraEmails"
                                    color="secondary"
                                    required
                                />
                            }
                            label={
                                <Typography className={styles.controlLabel}>
                                    I agree with service{' '}
                                    <Link
                                        to="/rules"
                                        style={{
                                            color: '#ff2172',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        rules
                                    </Link>{' '}
                                    and agree to the provision of personal data.
                                </Typography>
                            }
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
                >
                    Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link
                            to="/Login"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default RegisterForm
