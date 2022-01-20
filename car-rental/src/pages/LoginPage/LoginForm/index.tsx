import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useTheme } from '@mui/material'
import { Form, useFormik } from 'formik'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import AuthService from 'services/auth.service'
import useStyles, { boxStyle, errorStyle, linkStyle } from './styles'
import { AuthContext } from '../../../context/authContext'
import { loginValues } from '../../../shared/types/Auth'
import { loginInitialValues, loginSchema } from '../../../shared/schemes/login'

const LoginForm: React.FC = () => {
    const styles = useStyles()
    const theme = useTheme()

    const { isAuth, changeAuth } = useContext(AuthContext)
    const navigate = useNavigate()

    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const { control, handleSubmit } = useForm<loginValues>()

    const onSubmit = async (data: loginValues) => {
        console.log(data)
        AuthService.login(data.email, data.password)
            .then((response) => {
                if (response) {
                    changeAuth()
                    navigate('../', { replace: true })
                }
            })
            .catch((error) => {
                if (error.response) {
                    setLoading(false)
                    setMessage(error.response.data.Title)
                }
            })
    }

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: loginSchema,
        onSubmit: (values: loginInitialValues) => {
            onSubmit(values)
        },
    })

    return (
        <Box sx={boxStyle}>
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
            <form onSubmit={formik.handleSubmit}>
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
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

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
                        formik.touched.password && formik.errors.password
                    }
                />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography
                            color={theme.palette.error.main}
                            style={errorStyle}
                        >
                            {message}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to="/restore" style={linkStyle}>
                            Forgot password?
                        </Link>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 1, width: '100%' }}>
                    {/* <FormControlLabel */}
                    {/*    control={ */}
                    {/*        <Checkbox */}
                    {/*            className={styles.checkbox} */}
                    {/*            value="remember" */}
                    {/*            color="secondary" */}
                    {/*        /> */}
                    {/*    } */}
                    {/*    label={ */}
                    {/*        <Typography className={styles.controlLabel}> */}
                    {/*            Remember me */}
                    {/*        </Typography> */}
                    {/*    } */}
                    {/* /> */}
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
                        style={{
                            display: 'block',
                            textAlign: 'center',
                        }}
                    >
                        <Grid item xs>
                            <Link to="/Signup" className={styles.text}>
                                Don&apos;t have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </Box>
    )
}

export default LoginForm
