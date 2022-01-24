import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useTheme } from '@mui/material'

import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

import { registerValues } from 'shared/types/auth'
import { registerSchema } from 'shared/schemes/register'

import { useAuth } from 'context/authContext'
import { login, register } from 'services/auth.service'

import useStyles, { boxStyle, errorStyle } from './styles'

const RegisterForm: React.FC = () => {
    const styles = useStyles()
    const theme = useTheme()

    const { changeAuth } = useAuth()
    const [message, setMessage] = useState<string>('')
    const [, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const onSubmit = (data: registerValues) => {
        register(data.firstName, data.lastName, data.email, data.password)
            .then((response) => {
                if (response) {
                    login(data.email, data.password).then(() => {
                        changeAuth()
                        navigate('../', { replace: true })
                    })
                }
            })
            .catch((error) => {
                if (error.response) {
                    setLoading(false)
                    setMessage(error.response.data.title)
                }
            })
    }

    const formik = useFormik({
        initialValues: { firstName: '', lastName: '', email: '', password: '' },
        validationSchema: registerSchema,
        onSubmit: (values: registerValues) => {
            onSubmit(values)
        },
    })

    return (
        <Box sx={boxStyle}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color="text.primary">
                Sign up
            </Typography>
            <Box sx={{ mt: 3 }}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={styles.field}
                                color="secondary"
                                margin="normal"
                                fullWidth
                                name="firstName"
                                label="First Name"
                                type="firstName"
                                id="firstName"
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
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.firstName &&
                                    Boolean(formik.errors.firstName)
                                }
                                helperText={
                                    formik.touched.firstName &&
                                    formik.errors.firstName
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={styles.field}
                                color="secondary"
                                margin="normal"
                                fullWidth
                                name="lastName"
                                label="Last Name"
                                type="lastName"
                                id="lastName"
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
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.lastName &&
                                    Boolean(formik.errors.lastName)
                                }
                                helperText={
                                    formik.touched.lastName &&
                                    formik.errors.lastName
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={styles.field}
                                color="secondary"
                                margin="normal"
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
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                }
                                helperText={
                                    formik.touched.email && formik.errors.email
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={styles.field}
                                color="secondary"
                                margin="normal"
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
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.password &&
                                    Boolean(formik.errors.password)
                                }
                                helperText={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                            />
                        </Grid>
                        <Typography
                            color={theme.palette.error.main}
                            style={errorStyle}
                        >
                            {message}
                        </Typography>
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
                                        and agree to the provision of personal
                                        data.
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
                </form>
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
