import React from 'react'

import Box from '@mui/material/Box'

import InputFiled from './InputFileds'
import FormFooter from './FormFooter'
import FormHeader from './FormHeader'

function LoginForm() {
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
        >
            <FormHeader />
            <InputFiled />
            <FormFooter />
        </Box>
    )
}

export default LoginForm
