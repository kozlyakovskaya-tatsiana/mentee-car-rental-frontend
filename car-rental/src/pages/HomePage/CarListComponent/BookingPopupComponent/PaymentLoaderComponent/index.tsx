import React from 'react'
import { Dialog, DialogContent, DialogTitle, useTheme } from '@mui/material'

import { Oval } from 'react-loader-spinner'

import { DialogComponentProps } from '../index'

const PaymentLoaderComponent: React.FC<DialogComponentProps> = (props) => {
    const { open, handleClose } = props
    const theme = useTheme()
    return (
        <Dialog open={open}>
            <DialogTitle style={{ textAlign: 'center' }}>Payment</DialogTitle>
            <DialogContent
                style={{
                    height: 200,
                    width: 200,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Oval
                    height={80}
                    width={80}
                    color="#ffffff"
                    secondaryColor={theme.palette.secondary.main}
                />
            </DialogContent>
        </Dialog>
    )
}

export default PaymentLoaderComponent
