import React, { SyntheticEvent } from 'react'

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box, Slider, useTheme } from '@mui/material'

import Fuel from 'shared/enums/Fuel'
import Transmission from 'shared/enums/Transmission'
import { BrandInputType } from 'shared/types/CarTypes'

import CarSelectComponent from './CarSelectComponent'
import { papersHandlerStyle } from '../CarListComponent/styles'

interface FilterOptionsProps {
    brandSelect: BrandInputType[]
    onBrandSelected: (event: SyntheticEvent, value: any) => void
    onSelectFuel: (event: React.ChangeEvent<HTMLSelectElement>) => void
    onSelectTransmission: (event: React.ChangeEvent<HTMLSelectElement>) => void
    transmission: number | undefined
    fuel: number | undefined
    quantityOfSeats: string | undefined
    onQuantityChange: (e: any) => void
    fuelConsumption: string | undefined
    onFuelConsumptionChange: (e: any) => void
    price: number | undefined
    onPriceChange: (e: any, value: number | number[]) => void
}

const FilterOptionsComponent: React.FC<FilterOptionsProps> = (props) => {
    const theme = useTheme()

    const renderOptions = (renderProps: any, option: any) => (
        <li {...renderProps} key={option.name}>
            {option.name}
        </li>
    )

    const {
        brandSelect,
        onBrandSelected,
        onSelectFuel,
        onSelectTransmission,
        transmission,
        fuel,
        quantityOfSeats,
        onQuantityChange,
        fuelConsumption,
        onFuelConsumptionChange,
        price,
        onPriceChange,
    } = props

    return (
        <Box component="main" style={papersHandlerStyle}>
            <Paper
                style={{
                    height: 570,
                    backgroundColor: '#1a1a1a',
                    padding: 10,
                }}
            >
                <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            id="brand-autocomplete-box"
                            options={brandSelect}
                            renderOption={renderOptions}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => (
                                <TextField {...params} label="Brand" />
                            )}
                            onChange={onBrandSelected}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CarSelectComponent
                            enumerate={Transmission}
                            label="Transmission Type"
                            onSelect={onSelectTransmission}
                            value={
                                !Number.isNaN(Number(transmission))
                                    ? Number(transmission).toString()
                                    : 'None'
                            }
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CarSelectComponent
                            enumerate={Fuel}
                            label="Fuel"
                            onSelect={onSelectFuel}
                            value={
                                !Number.isNaN(Number(fuel))
                                    ? Number(fuel).toString()
                                    : 'None'
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Quantity of seats"
                            color="secondary"
                            type="number"
                            fullWidth
                            onChange={onQuantityChange}
                            value={quantityOfSeats}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Fuel consumption"
                            color="secondary"
                            type="number"
                            fullWidth
                            onChange={onFuelConsumptionChange}
                            value={fuelConsumption}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container item>
                            <Grid item xs={6}>
                                <Typography style={{ fontSize: '10pt' }}>
                                    Price
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {/* eslint-disable no-nested-ternary */}
                                <Typography
                                    style={{
                                        fontSize: '10pt',
                                        textAlign: 'right',
                                    }}
                                >
                                    {price === undefined
                                        ? '0'
                                        : price === 551
                                        ? '∞'
                                        : price}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Slider
                            defaultValue={551}
                            size="small"
                            aria-label="Small"
                            color="secondary"
                            onChangeCommitted={onPriceChange}
                            max={551}
                            valueLabelDisplay="auto"
                        />
                        <Slider
                            aria-label="Default"
                            max={551}
                            value={price}
                            defaultValue={551}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default FilterOptionsComponent
