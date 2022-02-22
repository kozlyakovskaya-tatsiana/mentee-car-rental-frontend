import React from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
    useTheme,
} from '@mui/material'
import Button from '@mui/material/Button'
import MuiPhoneNumber from 'material-ui-phone-number'

import Transmission from 'shared/enums/Transmission'
import Fuel from 'shared/enums/Fuel'
import { DialogComponentProps } from '..'

const DialogFormComponent: React.FC<DialogComponentProps> = (props) => {
    const theme = useTheme()
    const {
        open,
        chosenCar,
        filterOptions,
        handleCanceledClose,
        handleSubmittedClose,
        handleClose,
    } = props
    return (
        <Dialog open={open}>
            <DialogTitle style={{ textAlign: 'center' }}>Book car</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Insert all required information
                </DialogContentText>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="first-name"
                                label="First Name"
                                fullWidth
                                variant="standard"
                                defaultValue={localStorage.getItem('firstName')}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="last-name"
                                label="Last Name"
                                fullWidth
                                variant="standard"
                                defaultValue={localStorage.getItem('lastName')}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            inputProps={{
                                classes: {
                                    readOnly: true,
                                },
                            }}
                            variant="standard"
                            value={localStorage.getItem('email')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPhoneNumber
                            fullWidth
                            defaultCountry="by"
                            regions="europe"
                            label="Phone number"
                            onChange={(e) => {
                                console.log(e)
                            }}
                        />
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="pick-up-time"
                                label="Pick-up Time"
                                fullWidth
                                variant="standard"
                                inputProps={{ readOnly: true }}
                                value={
                                    filterOptions.PickUpDateTime
                                        ? filterOptions.PickUpDateTime.replace(
                                              'T',
                                              ' '
                                          )
                                        : ''
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="drop-off-time"
                                label="Drop Off Time"
                                fullWidth
                                variant="standard"
                                inputProps={{ readOnly: true }}
                                value={
                                    filterOptions.DropOffDateTime
                                        ? filterOptions.DropOffDateTime.replace(
                                              'T',
                                              ' '
                                          )
                                        : ''
                                }
                            />
                        </Grid>
                    </Grid>
                    {open ? (
                        <Grid item xs={12}>
                            <DialogContentText
                                style={{
                                    color: theme.palette.secondary.main,
                                }}
                            >
                                {`${chosenCar!.brand.name} ${chosenCar!.model}`}
                            </DialogContentText>
                            <DialogContentText>
                                {`with ${
                                    Transmission[chosenCar!.transmission]
                                } transmission, ${Fuel[chosenCar!.fuel]} and ${
                                    chosenCar!.quantityOfSeats
                                } seats`}
                            </DialogContentText>
                        </Grid>
                    ) : (
                        <div />
                    )}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleCanceledClose}
                    variant="outlined"
                    color="secondary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmittedClose}
                    variant="outlined"
                    color="secondary"
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogFormComponent
