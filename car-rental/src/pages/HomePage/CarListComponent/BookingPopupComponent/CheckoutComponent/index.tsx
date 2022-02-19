import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from '@mui/material'

import { CheckoutProps } from '../index'

const CheckoutComponent: React.FC<CheckoutProps> = (props) => {
    const { open, handleClose, checkout } = props
    return (
        <Dialog open={open}>
            <DialogTitle style={{ textAlign: 'center' }}>Payment</DialogTitle>
            <DialogContent
                style={{
                    height: 400,
                    width: 300,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography color="secondary">Pick-up time: </Typography>
                {`${checkout.startTimeOfBooking} `}
                <br />
                <Typography color="secondary">Drop-off time: </Typography>
                {`${checkout.endTimeOfBooking}`}
                <br />
                <Typography color="secondary">Total price: </Typography>
                {`${checkout.totalPrice}`}
                <br />
                <Typography color="secondary">
                    Your car uniq number:{' '}
                </Typography>
                {`${checkout.carId}`}
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="secondary"
                    variant="outlined"
                >
                    End
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CheckoutComponent
