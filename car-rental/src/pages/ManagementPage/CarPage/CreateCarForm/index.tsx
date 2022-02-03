/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'

import Grid from '@mui/material/Grid'

import { BrandInputType, ModelInputType } from 'shared/types/CarTypes'
import Fuel from 'shared/enums/Fuel'

import {
    Button,
    createFilterOptions,
    FormControl,
    Input,
    TextField,
    useTheme,
} from '@mui/material'
import Box from '@mui/material/Box'

import Transmission from 'shared/enums/Transmission'

import CarAutocompleteComponent from './CarAurocompleteComponent'
import CarSelectComponent from './CarSelectComponent'

const filter = createFilterOptions<BrandInputType>()

export const CreateCarForm: React.FC = () => {
    const theme = useTheme()

    const [selectedImage, setSelectedImage] = React.useState<
        Blob | MediaSource | null
    >(null)

    const [brand, setBrand] = React.useState<BrandInputType | null>(null)
    const [model, setModel] = React.useState<ModelInputType | null>(null)
    const [fuel, setFuel] = React.useState<string>('')
    const [transmission, setTransmission] = React.useState<string>('')

    const onChangeBrand = (event: any, newValue: any) => {
        if (typeof newValue === 'string') {
            setBrand({
                name: newValue,
            } as BrandInputType)
        } else if (newValue && newValue.inputValue) {
            setBrand({
                name: newValue.inputValue,
            } as BrandInputType)
        } else {
            setBrand(newValue)
        }
    }

    const onChangeModel = (event: any, newValue: any) => {
        if (typeof newValue === 'string') {
            setModel({
                name: newValue,
            } as BrandInputType)
        } else if (newValue && newValue.inputValue) {
            setModel({
                name: newValue.inputValue,
            } as BrandInputType)
        } else {
            setModel(newValue)
        }
    }

    const onSelectFuel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFuel(event.target.value)
    }

    const onSelectTransmission = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setTransmission(event.target.value)
    }

    const filterOptions = (options: any, params: any) => {
        const filtered = filter(options, params)
        const { inputValue } = params
        const isExisting = options.some(
            (option: any) => inputValue === option.name
        )
        if (inputValue !== '' && !isExisting) {
            filtered.push({
                inputValue,
                name: `Add "${inputValue}"`,
            } as BrandInputType)
        }
        return filtered
    }

    const optionLabel = (option: any) => {
        if (typeof option === 'string') {
            return option
        }
        if (option.inputValue) {
            return option.inputValue
        }
        return option.name
    }

    const renderOptions = (props: any, option: any) => (
        <li {...props}>{option.name}</li>
    )

    return (
        <Grid container spacing={1} rowSpacing={2}>
            <Grid item xs={6}>
                <CarAutocompleteComponent
                    value={brand}
                    onChange={onChangeBrand}
                    filterOptions={filterOptions}
                    optionLabel={optionLabel}
                    renderOptions={renderOptions}
                    infoArray={[]}
                    label="Car Brand"
                />
            </Grid>
            <Grid item xs={6}>
                <CarAutocompleteComponent
                    value={model}
                    onChange={onChangeModel}
                    filterOptions={filterOptions}
                    optionLabel={optionLabel}
                    renderOptions={renderOptions}
                    infoArray={[]}
                    label="Model"
                />
            </Grid>
            <Grid item xs={6}>
                <CarSelectComponent
                    enumerate={Fuel}
                    label="Fuel Type"
                    onSelect={onSelectFuel}
                    value={fuel}
                />
            </Grid>
            <Grid item xs={6}>
                <CarSelectComponent
                    enumerate={Transmission}
                    label="Transmission Type"
                    onSelect={onSelectTransmission}
                    value={transmission}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Quantity of seats"
                    color="secondary"
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField label="Price per hour" color="secondary" fullWidth />
            </Grid>
            <Grid item xs={12}>
                {selectedImage && (
                    <div>
                        <img
                            alt="not fount"
                            width="250px"
                            src={URL.createObjectURL(selectedImage)}
                        />
                        <br />
                        <button
                            onClick={() => setSelectedImage(null)}
                            type="button"
                        >
                            Remove
                        </button>
                    </div>
                )}
                <Input
                    type="file"
                    name="photo-uploader"
                    onChange={(event) => {
                        console.log(event.target.value)
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default CreateCarForm
