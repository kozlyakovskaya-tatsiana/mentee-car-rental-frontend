import React from 'react'

import Grid from '@mui/material/Grid'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Alert from '@mui/material/Alert'
import Paper from '@mui/material/Paper'

import { City, Country } from '../../../shared/types/Locations'

import { lotPaperStyle, useStyles } from '../styles'

interface HeadFilteringProps {
    countries: Country[]
    onCountrySelected: (event: any, value: any) => void
    cities: City[]
    onCitySelected: (event: any, value: any) => void
    pickUp: string
    updatePickUp: (e: any) => void
    dropOff: string
    updateDropOff: (e: any) => void
    allFieldsSelected: boolean
    showWarningAlert: () => void
    checked: boolean
    onSubmit: () => void
    dataTimeApproved: boolean
}

const HeadFilteringComponent: React.FC<HeadFilteringProps> = (props) => {
    const {
        countries,
        onCountrySelected,
        cities,
        onCitySelected,
        pickUp,
        updatePickUp,
        dropOff,
        updateDropOff,
        allFieldsSelected,
        showWarningAlert,
        checked,
        onSubmit,
        dataTimeApproved,
    } = props
    const styles = useStyles()
    return (
        <Paper sx={lotPaperStyle}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Autocomplete
                        classes={{
                            inputRoot: styles.autoComplete,
                        }}
                        id="country-select"
                        options={countries.map(
                            (option: Country) => option.name
                        )}
                        forcePopupIcon={false}
                        onChange={onCountrySelected}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                className={styles.field}
                                label="Country"
                                margin="normal"
                                variant="outlined"
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Autocomplete
                        classes={{
                            inputRoot: styles.autoComplete,
                        }}
                        id="city-select"
                        options={cities.map((option: City) => option.name)}
                        forcePopupIcon={false}
                        onChange={onCitySelected}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                className={styles.field}
                                label="City"
                                margin="normal"
                                variant="outlined"
                            />
                        )}
                    />
                </Grid>
                <Grid
                    container
                    item
                    spacing={1}
                    xs={12}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Grid item xs={4}>
                        <Stack
                            component="form"
                            noValidate
                            spacing={1}
                            classes={{
                                inputRoot: styles.stack,
                            }}
                        >
                            <TextField
                                id="PickUpBookingTime"
                                label="Pick-up"
                                type="datetime-local"
                                classes={{ root: styles.field }}
                                value={pickUp}
                                onChange={updatePickUp}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack
                            component="form"
                            noValidate
                            spacing={1}
                            classes={{
                                inputRoot: styles.stack,
                            }}
                        >
                            <TextField
                                id="DropOffBookingTime"
                                label="Drop-off"
                                type="datetime-local"
                                classes={{ root: styles.field }}
                                value={dropOff}
                                onChange={updateDropOff}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            color={allFieldsSelected ? 'secondary' : 'primary'}
                            onClick={
                                allFieldsSelected ? onSubmit : showWarningAlert
                            }
                        >
                            Search
                        </Button>
                    </Grid>
                    <Fade in={checked}>
                        <Grid item xs={12}>
                            {dataTimeApproved ? (
                                <Alert severity="error">
                                    Insert all fields!
                                </Alert>
                            ) : (
                                <Alert severity="error">
                                    Wrong data selected!
                                </Alert>
                            )}
                        </Grid>
                    </Fade>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default HeadFilteringComponent
