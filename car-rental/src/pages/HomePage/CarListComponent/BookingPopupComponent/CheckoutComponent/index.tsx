import React from 'react'
import moment from 'moment'

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
                <Typography color="secondary">Pick up time: </Typography>
                {`${moment(checkout.startTimeOfBooking).format(
                    'DD MMMM YYYY HH:mm'
                )} `}
                <br />
                <Typography color="secondary">Drop off time: </Typography>
                {`${moment(checkout.endTimeOfBooking).format(
                    'DD MMMM YYYY HH:mm'
                )}`}
                <br />
                <Typography color="secondary">Total price: </Typography>
                {`${checkout.totalPrice}`}
                <br />
                <Typography color="secondary">
                    Your booking uniq number:{' '}
                </Typography>
                {`${checkout.id}`}
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
